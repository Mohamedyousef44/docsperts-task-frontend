import React , {useEffect , useState} from 'react'
import api from '../../utils/ApiInterceptor';
import { Link, useParams } from 'react-router-dom';

export default function BookDetails() {
    const [book , setBook] = useState({})
    const {id} = useParams()
    useEffect(() => {
        api.get(`book/${id}`).then((response) => {
            console.log(response.data.data)
          setBook(response.data.data[0]);
        });
      }, [id]);
  return (
    <div className='my-4 d-flex flex-column justify-content-center align-items-center book-box'>
        <p>Title</p>
        <h2>{book.title}</h2>
        <h2>{book.price} $</h2>
        <p>Created By</p>
        <h2>{book.author}</h2>
        <Link className='btn btn-dark' to={'/books/'+book.id+'/page'}>Pages</Link>
    </div>
  )
}
