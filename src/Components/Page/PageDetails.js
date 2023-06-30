import React , {useEffect , useState} from 'react'
import api from '../../utils/ApiInterceptor';
import { useParams } from 'react-router-dom';

export default function PageDetails() {
    const [page , setPage] = useState({})
    const {id , pk} = useParams()
    useEffect(() => {
        api.get(`book/${id}/page/${pk}/`).then((response) => {
            setPage(response.data.data);
        });
      }, []);
  return (
    <div className='my-4 page-box d-flex flex-column justify-content-between align-items-center'>
        <p className='w-100'>{page.content}</p>
        <h4>{page.page_number}</h4>
    </div>
  )
}
