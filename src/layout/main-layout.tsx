import { Navigate, Outlet } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./navbar"
import Cookies from "js-cookie"

export const MainLayout = () => {
  const token = Cookies.get("token")
  const role = Cookies.get("role")
  const roles = ['admin','teacher','student',];
  console.log(!role || !token || !roles.includes(role))
  if (!role || !token || !roles.includes(role)) {
    return <Navigate replace to={'/'}/>
  }
  return (
    <SidebarProvider className="bg-[#F8F7F0]">
      <AppSidebar role={role} />
      <main className="grow">
        <SidebarTrigger className="size-16 bg-[#F8F7F0]" />
        <div className="px-[30px] py-3">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  )
}
