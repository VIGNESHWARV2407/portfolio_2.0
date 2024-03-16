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
        color: "white",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        background: 'linear-gradient(to right, #26a267, #34495e)',
        // width: '250px',height:' 140px',
        borderRadius:'20px'
      }} onClick={() => setOpen(true)}>PlayBlue</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id='dialog-title'>PlayBlue</DialogTitle>
        <DialogContent id='dialog-desp' style={{ fontSize: "larger" }}>

          <p>Old Arcade Gaming Platform using HTML CSS JS</p>
          <p><strong>Time Taken : </strong><p>6 Months</p></p>
          <p><strong>Status : </strong><h5 style={{backgroundColor:'grey', width:'fit-content',padding:'5px',color:'white',borderRadius:'10px'}}>Ongoing</h5></p>

          <p>
            "PlayBlue" is an arcade game platform developed with HTML, CSS, and JavaScript, offering classic games like Pong, Maze Runner,
            and Tic Tac Toe. The platform provides an immersive gaming experience with intuitive controls and engaging gameplay
            .Players can enjoy nostalgic gaming moments while exploring various levels and challenges across different games, all within a user-friendly web interface</p>
          <p>App URL :  Added shortly </p>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Playblue
