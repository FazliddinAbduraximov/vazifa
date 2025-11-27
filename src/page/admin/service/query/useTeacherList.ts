import { request } from "@/config/request"
import { useQuery } from "@tanstack/react-query"
import type { IResponce, TeacherList } from "../../typeAdmin/type"

export const useTeacherList = () => {
  return useQuery({
    queryKey:['teacher_list'],
    queryFn:()=>request.get<IResponce<TeacherList>>('/teacher').then((res)=>res.data),
  })
}
