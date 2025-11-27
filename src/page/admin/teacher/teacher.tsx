import { Spinner } from "@/components/ui/spinner"
import { TeacherTable } from "../components/table"
import { useTeacherList } from "../service/query/useTeacherList"
import type { ColumnDef } from "@tanstack/react-table"
import React from "react"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

type Payment = {
  id: string
  count: number
  name: string
  specifiation: string
  isActive: "Active" | "Blocked"
  groups: number
  username: string
}

export const Teacher = () => {
  const { data, isLoading } = useTeacherList()
  const teachers: Payment[] = React.useMemo(() => {

    if (!Array.isArray(data?.data)) return [];

    return data?.data.map((item, index) => {
      return {
        id: item.id,
        count: index + 1,
        name: item.name,
        specifiation: item.specifiation,
        isActive: item.isActive ? "Active" : "Blocked",
        groups: item.groups.length || 0,
        username: item.username
      }
    })
  }, [data?.data])

  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "specifiation",
      header: "Specifiation",
    },
    {
      accessorKey: "isActive",
      header: "Status",
    },
    {
      accessorKey: "groups",
      header: "Groups",
    },
    {
      accessorKey: "username",
      header: "Username",
    },
    {
      id: "actions",
      header:'actions',
      cell: ({ row }) => {
        //@ts-ignore
        const teacher = row.original
      }
    },
  ]

  return (
    <div>
      {
        isLoading ? <Spinner /> : <TeacherTable columns={columns} data={teachers} />
      }
    </div>
  )
}
