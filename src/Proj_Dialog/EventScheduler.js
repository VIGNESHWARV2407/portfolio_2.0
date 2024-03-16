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
       fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
       background: 'linear-gradient(to right, #4caf50, #008000)',borderRadius:'20px',
        // width: '250px',height:' 110px'
        }} onClick={() => setOpen(true)}>Event Scheduler</Button>
        <Dialog
         open={open} 
         onClose={() => setOpen(false)}
         >
          <DialogTitle id='dialog-title' >Event Scheduler</DialogTitle>
          <DialogContent id='dialog-desp' style={{fontSize:"larger"}}>
            
            <p><strong>Event Scheduler using NEXT Js and MUI</strong></p>
            <p><strong>Time Taken : </strong><p>1 Month</p></p>
            <p><strong>Status : </strong><h5 style={{backgroundColor:'green', width:'fit-content',padding:'5px',color:'white',borderRadius:'10px'}}>Completed</h5></p>

            <p>An event scheduler built with Next.js facilitates time and event slot management. 
              Using JS functions users can allocate time slots for events with ease. 
              Next.js enables server-side rendering and dynamic routing for enhanced performance. 
              The scheduler provides real-time updates and seamless navigation for efficient event planning. 
              It offers a user-friendly interface to streamline time management and event organization.</p>
            <p><strong>App URL</strong> :  Added Shortly</p>
          </DialogContent>
        </Dialog>
      </>
    )
  }
  
  export default EveSche
  