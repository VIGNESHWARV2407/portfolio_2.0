import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
function Skills() {
    return (
        <div>
            {/* <div class="border" id="skills"></div> */}

            <h1  id="skills">Skills Known</h1>
            <div class="skills_known">
                <h2>Programming Language</h2>

                <div className='prg_prog'>
                    <div>
                        <h4>C</h4>
                        <ProgressBar completed={90} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#FF6347' />
                    </div>
                    <div>
                        <h4>C++</h4>
                        <ProgressBar completed={80} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#FF69B4' />
                    </div>
                    <div>
                        <h4>PYTHON</h4>
                        <ProgressBar completed={50} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#f5642a' />
                    </div>
                    <div>
                        <h4>JAVA</h4>
                        <ProgressBar completed={40} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#FF4500' />
                    </div>
                </div>
                <h2>Technologies</h2>

                <div className='tech_prog'>
                    <div>
                        <h4>HTML& CSS</h4>
                        <ProgressBar completed={90} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#FFD700' />
                    </div>
                    <div>
                        <h4>JS</h4>
                        <ProgressBar completed={70} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#2384c4' />
                    </div>
                    <div>
                        <h4>REACT JS</h4>
                        <ProgressBar completed={60} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#00BFFF' />
                    </div>
                    <div>
                        <h4>ANGULAR JS</h4>
                        <ProgressBar completed={40} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#9400D3' />
                    </div>
                    <div>
                        <h4>NEXT JS</h4>
                        <ProgressBar completed={50} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#FF8C00' />
                    </div>
                    <div>
                        <h4>QT</h4>
                        <ProgressBar completed={60} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#32CD32' />
                    </div>
                </div>
                
                <h2>Other Skills</h2>
                <div className='other_skills'>
                    <h2>Tools Known</h2>    
                    <ol>
                    <li>UI/UX Design</li>
                    <li>Docker [Basic]</li>
                    <li>Git</li>
                    <li>Web Hosting</li>
                    <li>Skill Trainer</li>
                    </ol>  

                    <div className='Skill_training'>
                        <p>As a Skill/Student Trainer mentoring a class of 300+ students
C , C++
HTML,CSS,JS
PowerBI , Excel
SQL - DBMS
ReactJS
in Bannari Amman Institute of Technology &
Basics Of Android Studio
MIT app Inventor
in Bannari Amman Vidya Niketan School
</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills
