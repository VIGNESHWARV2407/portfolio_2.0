import './App.css';
import Portfolio from './Proj_Dialog/Portfolio';
import Spd from './Proj_Dialog/Spd';
import Playblue from './Proj_Dialog/Playblue'
import QRcode from './Proj_Dialog/QRcode';
import Oce from './Proj_Dialog/Oce';
import EventScheduler from './Proj_Dialog/EventScheduler'
import CV_btn from './Proj_Dialog/CV_btn';
import WelcomeBoard from './Other CSS/WelcomeBoard';

function App() {

    return (
        <div className="App">

            <div class="navbar">
                <a href="#profile">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contacts</a>
            </div>

            <WelcomeBoard />


            <div className='prof_det'>
                <div class="name_and_photo" id="profile"></div>
                <div>
                    <h1>VIGNESHWAR V</h1>
                    <p>WEB & SOFTWARE DEVELOPER</p>
                </div>
            </div>


            {/* Main Content */}

            <div class="main_content">

                <div class="border" id="about"></div>

                <div class="about">
                    <h1>About me</h1>
                    <p>
                        An aspiring person who is looking for a challenging role in a dynamic stable organisation to utilize my
                        skills for the growth of the organisation as well as to enhance my knowledge on web application
                        development .
                        A kind ,calm, goal oriented and an optimistic person who is good in time and team management.
                    </p>
                    <CV_btn />
                </div>

                <div class="border" id="skills"></div>

                <div class="skills_known" id="skills">
                    <h1>Skills Known</h1>
                    <h3>Programming Language</h3>
                    <div class="first_skill">
                        <div class="prg_s" id="c"></div>
                        <div class="prg_s" id="cpp"></div>
                        <div class="prg_s" id="py"></div>
                        <div class="prg_s" id="java"></div>

                    </div>
                    <h3>Technologies</h3>
                    <div class="tech_skill">
                        <div class="prg_s" id="html"></div>
                        <div class="prg_s" id="css"></div>
                        <div class="prg_s" id="js"></div>
                        <div class="tech_s" id="react"></div>
                        <div class="tech_s" id="ang"></div>
                        <div class="tech_s" id="node"></div>
                        <div class="tech_s" id="next"></div>
                        <div class="tech_s" id="qt"></div>
                    </div>
                </div>

                <div class="border" id="projects"></div>

                <div class="projects">
                    <h1>Projects</h1>
                    <h3>HTML-CSS-JS</h3>
                    <div class="htmlcssjs">
                        {/* Dialog with description and URL*/}
                        <div class="proj_hcj" id="pf">
                            <Portfolio />
                            {/* add portfolio 2.0 in advanced project in html portfolio */}
                        </div>
                        <div class="proj_hcj" id="spd">
                            <Spd />
                        </div>
                        <div class="proj_hcj" id="pl">
                            <Playblue />
                        </div>
                        <div class="proj_hcj" id="qr">
                            <QRcode />
                        </div>
                    </div>


                    <h3>Advanced Technologies</h3>
                    <div class="advweb">
                        <div class="proj_adv" id="oce">
                            <Oce />
                        </div>
                        <div class="proj_adv" id="es">
                            <EventScheduler />
                        </div>
                    </div>

                </div>
            </div>

            {/* Contact Details */}
            <div class="border" id="contact"></div>

            <div class="contact">
                <h1>For Contact :</h1>
                <h4>vigneshwarvenugopal24@gmail.com</h4>
                <h4>vigneshwar.cb21@bitsathy.ac.in</h4>
                <h4>+919444127645</h4>
                <div class="links">
                    <a href="https://github.com/VIGNESHWAR2407" id="github" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/vigneshwar-v-0b65b322a/" id="linkedin" target="_blank">LinkedIn</a>

                    {/* Up  and Down nav button */}
                    <a href="#profile" className='to_top'><img /></a>

                </div>
            </div>

            {/* Main Content Ends */}

            {/* Footer */}
            <section class="footer" id="footer" style={{ background: "./Images/bg.gif" }}>
                <h3>Developed by <strong>Vigneshwar</strong></h3>
            </section>


            {/* Final Div */}
        </div>
    );
}

export default App;
