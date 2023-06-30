import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../utils/ApiInterceptor';

export default function Pages() {
  const [pages , setPages] = useState([]);
  const {id}  = useParams() 
  const deletePage = (pk) => {
    api.delete(`book/${id}/page/${pk}/`).then((response)=>{
        setPages(response.data.data);
    })
  };

  useEffect(() => {
    api.get(`book/${id}/page/`).then((response) => {
        setPages(response.data.data);
    });
  }, []);

  return (
    <>
    <Link to={'new'} className='btn btn-dark ms-2 my-4 w-25'>New Page</Link>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Book</th>
            <th scope="col">Page Number</th>
            <th scope="col">Actions</th>

          </tr>
        </thead>
        <tbody>
          {pages.map((page) => (
            <tr key={page.id}>
              <td>{page.book}</td>
              <td>{page.page_number}</td>
              <td>
                <div>
                  <Link to={`${page.page_number}`} className="btn btn-primary">
                    View
                  </Link>
                  <Link
                    to={`${page.page_number}/edit`}
                    className="btn btn-success"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deletePage(page.page_number)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}