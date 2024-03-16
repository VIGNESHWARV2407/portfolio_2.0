import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button
} from "@mui/material"

import { useState } from "react"

export const Portfolio = () => {
  const [open, setOpen] = useState(false)
  
  const handleCloseDialog = () => {
    setOpen(false); // once all get hosted., apply it to all the one
  }

  return (
      <>
      <Button style={{
        color: "white",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        background: 'linear-gradient(to right, #f5a623, #f27121)',
        // width: '180px',height:' 140px',
        borderRadius:'20px'
      }} onClick={() => setOpen(true)}>Portfolio</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id='dialog-title' >Portfolio</DialogTitle>
        <DialogContent id='dialog-desp' style={{ fontSize: "larger" }}>

          <p>Personal Portfolio using HTML CSS JS</p>
          <p><strong>Time Taken : </strong><p>10 Days</p></p>
          <p><strong>Status : </strong><h5 style={{backgroundColor:'green', width:'fit-content',padding:'5px',color:'white',borderRadius:'10px'}}>Completed</h5></p>

          {/* Add onClick event handler to the anchor tag */}
          <p>App URL : <a href="https://vikiverse.vercel.app/" target="blank" onClick={handleCloseDialog}>vikverse.vercel.app</a></p>
        </DialogContent>
      </Dialog>
    </>
    
  )
}

export default Portfolio
