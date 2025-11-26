import { Students } from "@/page/admin/students/students"
import { Teacher } from "@/page/admin/teacher/teacher"
import { Profile } from "@/page/admin/profile"
import { Settings } from "@/page/admin/settings"

export default [
    {
        path:'teachers',
        page:Teacher
    },
    {
        path:'student',
        page:Students
    },
    {
        path:'seting',
        page:Settings
    },
    {
        path:'profile',
        page:Profile
    },
]