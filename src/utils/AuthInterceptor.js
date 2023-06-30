import axios from 'axios'

const auth = axios.create({
    baseURL: "http://127.0.0.1:8000/user/",
    headers: {
        'Content-Type': 'application/json',
      },
})

auth.interceptors.response.use(
    
    (response)=>{
        
        if(response.status === 201) { 
            window.location.href = "/login";
        } else if (response.status === 200){ 
            const token = response.data.data
            if(token){
                localStorage.setItem("jwt" , token)
                window.location.href = "/";
            }
        }
        return response;
    },
    (error)=>{
        if (error.response.status === 404 || error.response.status === 500){
            window.location.href = "**";
        }
        return Promise.reject(error);
    }
)


export default auth ;