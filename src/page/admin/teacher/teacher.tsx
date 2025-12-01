import { Spinner } from "@/components/ui/spinner"
import { TeacherTable } from "../components/table"
import { useTeacherList } from "../service/query/useTeacherList"
import type { ColumnDef } from "@tanstack/react-table"
import React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { useToggle } from "@/hooks/useToggle"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TeacherForm } from "../components/teacherForm"


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
  const { open, close, isOpen } = useToggle()

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
      header: 'actions',
      cell: ({ row }) => {
        const teacher = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      }
    },
  ]

  return (
    <div>
      {
        isLoading ? <Spinner />
          : (
            <>
              <Button className="mb-5" onClick={open}>Create</Button>

              <Dialog onOpenChange={close} open={isOpen}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Teacher create</DialogTitle>
                    <DialogDescription>
                      <TeacherForm />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <TeacherTable columns={columns} data={teachers} />
            </>
          )
      }
    </div>
  )
}
