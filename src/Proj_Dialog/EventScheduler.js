import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button
  } from "@mui/material"
  
  import { useState } from "react"
  
  export const EveSche = () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button style={{
        color:"white",
       fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif"}} onClick={() => setOpen(true)}>Event Scheduler</Button>
        <Dialog
         open={open} 
         onClose={() => setOpen(false)}
         >
          <DialogTitle id='dialog-title' >Event Scheduler</DialogTitle>
          <DialogContent id='dialog-desp' style={{fontSize:"larger"}}>
            <p>Event Scheduler using NEXT Js and MUI</p>
            <p>App URL :  Added Shortly</p>
          </DialogContent>
        </Dialog>
      </>
    )
  }
  
  export default EveSche
  