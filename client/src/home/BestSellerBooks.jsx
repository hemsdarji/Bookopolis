import React, { useEffect, useState } from 'react';
import BookCard from '../component/BookCard';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
            });
    }, []);

    return (
        <div>
          <BookCard books = {books} title = "Best Seller Books"/>
        </div>
    );
};

export default BestSellerBooks;
