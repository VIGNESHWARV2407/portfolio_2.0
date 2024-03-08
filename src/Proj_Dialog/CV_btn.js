import { click } from '@testing-library/user-event/dist/click';
import React from 'react'

const resume_cv="http://localhost:3000/viki_cv.pdf"; //url
export default function CV_btn() {
    const download_cv=(url)=>
    {
        const fileName = url.split("/").pop();
        const aTag=document.createElement("a");
        aTag.href=url;
        aTag.setAttribute("download",fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
  return (
    <div>
      <div className='btn_cv'>
        <a href='./viki_cv.pdf' id='cv_view'>View Resume</a>&nbsp;&nbsp;
        <button id='cv_btn' onClick={()=>{download_cv(resume_cv)}}>Download CV</button>
      </div>
    </div>
  )
}
