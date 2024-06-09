import { BookAvgAggregate } from "../outputs/BookAvgAggregate";
import { BookCountAggregate } from "../outputs/BookCountAggregate";
import { BookMaxAggregate } from "../outputs/BookMaxAggregate";
import { BookMinAggregate } from "../outputs/BookMinAggregate";
import { BookSumAggregate } from "../outputs/BookSumAggregate";
export declare class BookGroupBy {
    id: string;
    title: string;
    author: string;
    description: string;
    category: string;
    image: string;
    quantityAvaiable: number;
    userId: string;
    _count: BookCountAggregate | null;
    _avg: BookAvgAggregate | null;
    _sum: BookSumAggregate | null;
    _min: BookMinAggregate | null;
    _max: BookMaxAggregate | null;
}
