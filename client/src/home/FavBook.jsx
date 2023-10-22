import React, { useEffect, useState } from 'react';
import BookCart from '../component/BookCart';

const FavBook = () => {
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
          <BookCart books = {books} title = "Best Seller Books"/>
        </div>
    );
};

export default FavBook;
