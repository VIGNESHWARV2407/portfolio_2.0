import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button
} from "@mui/material"

import { useState } from "react"

export const QRcode = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button style={{
        color: "white",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        background: 'linear-gradient(to right, #0073e6, #93d7e0)',
        // width: '190px',height:' 140px',
        borderRadius:'20px'
      }} onClick={() => setOpen(true)}>QR Generator</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id='dialog-title'>QR Generator</DialogTitle>
        <DialogContent id='dialog-desp' style={{ fontSize: "larger" }}>

          <p>QR Generator using HTML CSS JS</p>
          <p><strong>Time Taken : </strong><p>2 Days</p></p>
          <p><strong>Status : </strong><h5 style={{backgroundColor:'green', width:'fit-content',padding:'5px',color:'white',borderRadius:'10px'}}>Completed</h5></p>

          <p>
            A QR code generator is a web tool developed using HTML, CSS, and JavaScript.
            It enables users to create customized QR codes for various data types, such as text, URLs, or contact information.</p>
          <p>App URL :  Added shortly </p>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default QRcode
