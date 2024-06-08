import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BOOK_MUTATION } from  '@/graphql/mutations/book';

const AddBookForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [quantityAvaiable, setQuantityAvailable] = useState(0);

    const [addBook, { loading, error }] = useMutation(ADD_BOOK_MUTATION);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const variables = {
            data: {
                title,
                author,
                description,
                category,
                image,
                quantityAvaiable: Number(quantityAvaiable),
            },
        };

        addBook({ variables })
            .then(() => {
                alert('Book added successfully!');
            })
            .catch((error) => {
                console.log(error)
            });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Book</h2>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="author">Author:</label>
                <input
                    type="text"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="category">Category:</label>
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="image">Image:</label>
                <input
                    type="text"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="quantityAvailable">Quantity Available:</label>
                <input
                    type="number"
                    id="quantityAvailable"
                    value={quantityAvaiable}
                    onChange={(e) => setQuantityAvailable(Number(e.target.value))}
                    className="block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                />
            </div>
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg transition duration-200 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
                {loading ? 'Adding...' : 'Add Book'}
            </button>
            {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
        </form>
    );
};

export default AddBookForm;