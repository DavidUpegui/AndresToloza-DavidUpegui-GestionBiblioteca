import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_LOANS } from "../../graphql/queries/loans";
import { Spinner } from "@radix-ui/themes";
import { Loan } from "@prisma/client";
import { ExtendedLoan, LoanQuery } from "../../types/ExtendedLoan";
import classNames from "classnames";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "../../components/ui/table";
import CreatLoanDialog from "./createLoanModal";
import { UPDATE_LOAN } from "@/graphql/mutations/loan";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { UserWithRole } from "@/types/User";
import SessionNotFound from "@/components/common/SessionNotFound";
import AuthGuard from "@/components/authguard/AuthGuard";

const LoansTable: React.FC = () => {
	const { data, loading, error } = useQuery<LoanQuery>(GET_LOANS, {
		fetchPolicy: "cache-and-network",
	});
	const { toast } = useToast();

	const [
		updateLoan,
		{ data: loanUpdateData, loading: loanUpdateLoading, error: loanUpdateError },
	] = useMutation(UPDATE_LOAN, {
		refetchQueries: [{ query: GET_LOANS }],
	});

	const changeLoanStatus = (id: string, currentStatus: string): void => {
		updateLoan({
			variables: {
				data: {
					status: {
						set: currentStatus === "PENDING" ? "RETURNED" : "PENDING",
					},
				},
				where: {
					id: id,
				},
			},
		})
			.then((response) => {
				console.log("Loan updated:", response.data.updateLoan); // Actualiza el log con la respuesta de la mutación
				toast({
					description: "Loan updated successfully",
				});
			})
			.catch((err) => {
				console.error("Error updating loan:", err);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: "There was a problem with your request.",
				});
			});
	};

	const { data: session, status } = useSession();
	const router = useRouter();

	if (status === "loading") {
		return <Spinner className="mx-auto" />;
	}
	// if (!session ) {
	//     console.log('No hay sesión');
	//     return (
	//       <SessionNotFound/>
	//     );
	// }
	const user: UserWithRole | undefined = session?.user;
	const role = user?.role;

	return (
		<AuthGuard>
			<div className="p-20">
				{loading ? (
					<Spinner className="mx-auto" />
				) : (
					<div>
						<h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl mb-20">
							List of loans
						</h1>
						<div>
							<div>
								<CreatLoanDialog></CreatLoanDialog>
							</div>
							<div className="border-2 border-gray-400 rounded-md shadow-border ">
								<Table>
									<TableCaption>A list of Loans</TableCaption>
									<TableHeader>
										<TableRow>
											<TableHead className="w-[100px] font-bold text-black">ID</TableHead>
											<TableHead className="font-bold text-black">
												Requester User Id
											</TableHead>
											<TableHead className="font-bold text-black">Book</TableHead>
											<TableHead className="font-bold text-black">Status</TableHead>
											<TableHead className="font-bold text-black">Created By</TableHead>
											<TableHead className="font-bold text-black">Change Status</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{data?.loans.map((loan) => (
											<TableRow key={loan.id}>
												<TableCell>{loan.id}</TableCell>
												<TableCell>{loan.user.email}</TableCell>
												<TableCell>{loan.book.title}</TableCell>

												<TableCell>
													<Badge
														className={
															loan.status === "PENDING"
																? "text-center text-black bg-yellow-500 rounded-md"
																: loan.status === "RETURNED"
																	? "text-center text-black bg-green-600 rounded-md"
																	: ""
														}
													>
														{loan.status}
													</Badge>
												</TableCell>
												<TableCell>{loan.createdBy.email}</TableCell>
												<TableCell>
													{loanUpdateLoading ? (
														<Spinner className="mx-auto" />
													) : (
														<Button
															onClick={() => changeLoanStatus(loan.id, loan.status)}
															className="mb-5 bg-blue-700"
														>
															Change Status
														</Button>
													)}
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
						</div>
					</div>
				)}
			</div>
		</AuthGuard>
	);
};

export default LoansTable;
