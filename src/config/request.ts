import type { LoginResponce } from '@/page/auth/typs';
import axios from 'axios'
import Cookies from 'js-cookie';

const request=axios.create({baseURL:"http://localhost:3000/api/v1"});

request.interceptors.request.use((config)=>{
    const token=Cookies.get("token")
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config;
})

//Respons uchun interseptor

request.interceptors.response.use(
    (response)=>{return response},
    async (error)=>{
        const orginalRequest=error.config;

        if(error.response.status==401 && !orginalRequest._retry){
            orginalRequest._retry=true;
            try {
                // const refreshToken=Cookies.get("token");
                // const response=await axios.post('url',{
                //     refresh_token:refreshToken
                // })

                const response=await axios.post<LoginResponce>(`http://localhost:3000/api/v1/admin/refresh`)
                const newAccessToken=response.data.data.token
                Cookies.set('token',newAccessToken)
                orginalRequest.headers.Authorization=`Bearer ${newAccessToken}`
                return request(newAccessToken);


            } catch (refreshError) {
                Cookies.remove('token')
                Cookies.remove('role')
                window.location.href='/'
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error)
    }

)




export {request};