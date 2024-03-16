import React from 'react'
import Number from '../Other CSS/Number'
import MailId from '../Other CSS/MailId'
function Contacts() {

  return (
    <div className='connections'>
      {/* <div class="border" id="contact"></div> */}
      <h1 style={{marginLeft:'60px'}}>Contacts</h1>
      <div class="contact" id="contact">
        <h2>For Contacts & To get connected with me.,</h2>
        <div class="links">
          <a href="https://github.com/VIGNESHWARV2407" id="github" target="_blank"></a>
          <a href="https://www.linkedin.com/in/vigneshwar-v-0b65b322a/" id="linkedin" target="_blank"></a>
          {/* <a href="#" id="facebook"></a> <a href="#" id="twitter"></a> */}
          <div className='personal'>
            <Number /><p style={{paddingRight:'50px'}}/>
              {/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (instead of p tag) */}
            <MailId />
          </div>
        </div>

      </div> {/* Up  and Down nav button */}
      <a href="#home" className='to_top'><img /></a>
    </div>
  )
}
export default Contacts;
