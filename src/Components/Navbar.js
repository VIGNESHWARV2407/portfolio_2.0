import React from 'react'

function Navbar() {
  return (
    <div>
      <div class="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href='#achieve'>Achievements</a>
        <a href="#contact">Contacts</a>
      </div>
      {/* <div class="navbar1">
        <div className='right_nav'> 
          <a href="#home">Home</a>
          <a href='#achieve'>Achievements</a>
          <a href="#skills">Skills</a>
        </div>
        <div className='left_nav'>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contacts</a>
        </div>
      </div> */}
      
    </div>
  )
}

export default Navbar
