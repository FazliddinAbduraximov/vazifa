import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {SwitchRole} from './switchRole'
import bentley from '../assets/bentley.svg'
import { Link } from "react-router-dom"
import { ActiveLink } from "@/components/active-link"


export function AppSidebar({role}:{role:string}) {
    const items = SwitchRole({ role })
    return (
        <Sidebar className="bg-blue-800">
            <SidebarHeader>
                <Link to={`/app/${role}`} className="h-[50px]">
                    <img src={bentley} alt="Logotip" className="h-full mr-auto ml-auto" />
                </Link>
                </SidebarHeader>
            <SidebarContent>
                <SidebarGroupContent className="p-0">
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <ActiveLink href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </ActiveLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}