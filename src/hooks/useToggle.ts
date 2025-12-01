import { useState } from "react"

export const useToggle = () => {
    const [isOpen, setOpen]=useState(false);
    const open=()=>setOpen(true);
    const close=()=>setOpen(false);
  return {open, close, isOpen}
}
