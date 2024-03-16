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
       fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
       background: 'linear-gradient(to right, #ff4500, #ff8c00)',borderRadius:'20px',
        // width: '300px',height:' 110px'
        }} onClick={() => setOpen(true)}>Online Currency Converter</Button>
        <Dialog
         open={open} 
         onClose={() => setOpen(false)}
         >
          <DialogTitle id='dialog-title' >Online Currency Converter</DialogTitle>
          <DialogContent id='dialog-desp' style={{fontSize:"larger"}}>
            
            <p>Online Currency Converter using React Js ,MUI and API</p>
            <p><strong>Time Taken : </strong><p>15 days</p></p>
            <p><strong>Status : </strong><h5 style={{backgroundColor:'green', width:'fit-content',padding:'5px',color:'white',borderRadius:'10px'}}>Completed</h5></p>

            <p>A currency converter developed in React.js utilizes the FreeCurrency API for real-time currency data. 
              With HTML, CSS, and JavaScript, the user-friendly interface allows input of currency values and selection of conversion rates. 
              React.js components ensure dynamic rendering, while API integration provides up-to-date exchange rates. 
              The converter offers seamless currency conversion, meeting diverse user needs across regions and currencies.</p>
            <p>App URL :  Added Shortly</p>
          </DialogContent>
        </Dialog>
      </>
    )
  }
  
  export default Oce
  