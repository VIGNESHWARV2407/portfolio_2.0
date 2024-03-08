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
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
      }} onClick={() => setOpen(true)}>Portfolio</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id='dialog-title' >Portfolio</DialogTitle>
        <DialogContent id='dialog-desp' style={{ fontSize: "larger" }}>
          <p>Personal Portfolio using HTML CSS JS</p>
          {/* Add onClick event handler to the anchor tag */}
          <p>App URL : <a href="https://vikiverse.vercel.app/" target="blank" onClick={handleCloseDialog}>vikverse.vercel.app</a></p>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Portfolio
