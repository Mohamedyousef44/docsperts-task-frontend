import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        'Content-Type': 'application/json',
      },  
}
)

api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('jwt')
        const csrfToken = getCookie('csrftoken')
        if(token && csrfToken){
            config.headers.Authorization = `Bearer ${token}`
            config.headers["X-CSRFToken"] = csrfToken
        }
        return config
    },
)

api.interceptors.response.use(
    (response)=>{
        return response
    },
    (error)=>{
        if(error.response.status === 401){
            window.location.href = "/login";
        }else if(error.response.status === 403){   
            window.location.href = "/notAuthorized";
        }else{
            window.location.href = "/**";
        }
        return Promise.reject(error);
    }
)

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

export default api;