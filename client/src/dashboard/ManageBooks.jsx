import React, { useEffect, useState } from 'react'
import {  Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {

  const [ allBook , setAllBook] = useState([]);

 useEffect( () =>  {
  fetch("http://localhost:5003/all-books").then(res => res.json()).then(data => setAllBook(data));
 },[])

  const handleDelete = (id) => {
    fetch(`http://localhost:5003/book/${id}`,
    {method : "DELETE"}).then(res => res.json()).then(data => {
     alert("book is deleted successfully!!")})
  }


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage your Book</h2>

      {/* table for book data */}
      <Table className='lg:w-[1180px]'>
      <Table.Head>
        <Table.HeadCell>
          No.
        </Table.HeadCell>
        <Table.HeadCell>
          Book Name
        </Table.HeadCell>
        <Table.HeadCell>
          Auther Name
        </Table.HeadCell>
        <Table.HeadCell>
          Category
        </Table.HeadCell>
        <Table.HeadCell>
          Price
        </Table.HeadCell>
        <Table.HeadCell>
          <span>
            Edit
          </span>
        </Table.HeadCell>
      </Table.Head>
      {
      allBook.map((book, index)  =>  <Table.Body className="divide-y" key={book._id}>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
           {index + 1}
          </Table.Cell>
          <Table.Cell>
           {book.bookTitle}
          </Table.Cell>
          <Table.Cell>
            {book.authorName}
          </Table.Cell>
          <Table.Cell>
           {book.category}
          </Table.Cell>
          <Table.Cell>
            $2999
          </Table.Cell>
          <Table.Cell>
            <Link
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              to={`/admin/dashboard/edit-books/${book._id}`}
            >
               Edit
              </Link>

             <button onClick={() => handleDelete(book._id)} className='px-4 py-1 bg-red-600 text-white rounded ml-4'>Delete</button>

          </Table.Cell>
        </Table.Row>
      </Table.Body>
        )
      }
     
    </Table>
    </div>
  )
}

export default ManageBooks;