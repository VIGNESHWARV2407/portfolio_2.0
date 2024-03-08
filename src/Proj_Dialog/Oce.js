import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button
  } from "@mui/material"
  
  import { useState } from "react"
  
  export const Oce = () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button style={{
        color:"white",
       fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif"}} onClick={() => setOpen(true)}>Online Currency Converter</Button>
        <Dialog
         open={open} 
         onClose={() => setOpen(false)}
         >
          <DialogTitle id='dialog-title' >Online Currency Converter</DialogTitle>
          <DialogContent id='dialog-desp' style={{fontSize:"larger"}}>
            <p>Online Currency Converter using React Js ,MUI and API</p>
            <p>App URL :  Added Shortly</p>
          </DialogContent>
        </Dialog>
      </>
    )
  }
  
  export default Oce
  