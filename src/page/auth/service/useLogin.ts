import { request } from "@/config/request"
import { useMutation } from "@tanstack/react-query"
import type { LoginResponce, LoginT } from "../typs"

export const useLogin = () => {
  return useMutation({
    mutationFn:(data:LoginT)=>request.post<LoginResponce>('/auth/signin',data,{
      withCredentials:true,
    }).then((res)=>res.data)
  })
}
