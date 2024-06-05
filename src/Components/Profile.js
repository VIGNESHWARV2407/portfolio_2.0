import React from 'react'
import CV_btn from './CV_btn'
function Profile() {
    return (
        <div>
            <div id='home'></div>
            <div className='prof_det'>
                <div class="name_and_photo" id="profile"></div>
                <div className='name_color_border'>
                <div className='name'>
                    <h1>VIGNESHWAR V</h1>
                    <p>WEB & SOFTWARE DEVELOPER</p>
                    <CV_btn/>
                </div>
                </div>  
            </div>
        </div>
    )
}

export default Profile
