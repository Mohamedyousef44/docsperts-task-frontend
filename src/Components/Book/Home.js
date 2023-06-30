import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/ApiInterceptor';

export default function Home() {
  const [books , setBooks] = useState([]);

  const deleteBook = (id) => {
    console.log(id);
    api.delete(`book/${id}/`).then((response)=>{
      setBooks(response.data.data);
    })
  };

  useEffect(() => {
    api.get('book/').then((response) => {
      setBooks(response.data.data);
    });
  }, []);

  return (
    <>
      {books.length === 0 ? (
        <h2 className='table-hover d-flex justify-content-center align-items-center'>There are no books. Create new ones now!</h2>
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Author</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.author}</td>
                <td>{book.title}</td>
                <td>{book.price}</td>
                <td>
                  <div>
                    <Link to={`/books/${book.id}`} className="btn btn-primary">
                      View
                    </Link>
                    <Link
                      to={`/books/${book.id}/edit`}
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteBook(book.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}