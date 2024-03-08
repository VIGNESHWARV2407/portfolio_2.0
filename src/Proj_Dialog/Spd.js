import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button
} from "@mui/material"

import { useState } from "react"

export const Spd = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <Button style={{
      color:"white",
      fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif"}} onClick={() => setOpen(true)}>Strong Password Generator</Button>
      <Dialog
       open={open} 
       onClose={() => setOpen(false)} 
       >
        <DialogTitle id='dialog-title'>Strong Password Generator</DialogTitle>
        <DialogContent id='dialog-desp' style={{fontSize:"larger"}}>
          <p>Strong Password Generator using HTML CSS JS</p>
          <p>App URL :  Added shortly </p>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Spd
