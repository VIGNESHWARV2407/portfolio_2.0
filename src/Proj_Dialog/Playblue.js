import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button
} from "@mui/material"

import { useState } from "react"

export const Playblue = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button style={{
      color:"white",
      fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif"}} onClick={() => setOpen(true)}>PlayBlue</Button>
      <Dialog
       open={open} 
       onClose={() => setOpen(false)} 
       >
        <DialogTitle id='dialog-title'>PlayBlue</DialogTitle>
        <DialogContent id='dialog-desp' style={{fontSize:"larger"}}>
          <p>Old Arcade Gaming Platform using HTML CSS JS</p>
          <p>App URL :  Added shortly </p>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Playblue
