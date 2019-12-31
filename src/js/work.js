import '../css/work.css';
import React from 'react';
import microsoft from '../images/work/microsoft.png';
import google from '../images/work/google.png';
import huawei from '../images/work/huawei.png';
import roboedu from '../images/work/roboedu2.png';
import '../css/courses.css'
import resume from '../resume.pdf'
import HorizontalLine from './line.js'
class Work extends React.Component {
    render() {
        return (
            <div className="work">

                <div className="workTitle">WORK EXPERIENCE</div>
                <br></br>
                <div className="workContainer">
                    <img className="worklogo" src={microsoft}></img>

                    <div className="workText">
                        <div className="workCompany">Microsoft</div>
                        <div className="workPosition">Software Engineering Intern</div>
                        <div className="workLocation">May 2020 - Aug 2020 • Redmond, Washington, USA</div>

                        <ul className="workDescription">
                            <li>Azure Core Operating Systems Data Intelligence Group</li>
                            <li>Incoming Software Engineering Intern for the Azure COSINE Group</li>
                            <br></br>
                        </ul>
                    </div>
                </div >
                <br></br>
                <div className="workContainer">
                    <img className="worklogo" src={google}></img>

                    <div className="workText">
                        <div className="workCompany">Google</div>
                        <div className="workPosition">Software Engineering Intern</div>
                        <div className="workLocation">Jan 2020 - May 2020 • Waterloo, Ontario, Canada</div>

                        <ul className="workDescription">
                            <li>Google Kubernetes Engine (GKE) Team</li>
                            <li>Incoming Software Engineering Intern on the GKE Team</li>
                        </ul>
                    </div>
                </div >

                <br></br>

                <div className="workContainer">
                    <img className="worklogo" src={huawei}></img>

                    <div className="workText">
                        <div className="workCompany">Huawei Technologies Canada, R&D</div>
                        <div className="workPosition">Deep Learning Research Intern (Support Engineer)</div>
                        <div className="workLocation">May 2019 - Aug 2019 • Kanata, Ontario, Canada</div>

                        <ul className="workDescription">
                            <li>Wireless communications team</li>
                            <li>Utilized generative models for 5G Technologies and wireless applications</li>
                            <li>Worked with models such as Normalizing Flows and Variational Autoencoders</li>
                        </ul>
                        <div className="NDA">* Details of the project are under NDA</div>
                    </div>
                </div >

                <br></br>

                <div className="workContainer">
                    <img className="worklogo" src={roboedu}></img>

                    <div className="workText">
                        <div className="workCompany">RoboEdu / RoboStorm</div>
                        <div className="workPosition">Robotics Instructor</div>
                        <div className="workLocation">Jun 2019 - Sep 2018 • Vancouver/Toronto, BC/ON, Canada</div>

                        <ul className="workDescription">
                            <li>Improved students Computer Science fundamentals with Scratch, Robot C, VEX IQ</li>
                            <li>Instructed over 30 students to increase their robotics assessment by 2 levels</li>
                            <li>Educated students on 3D design concepts with Lego Mindstorm, TinkerCAD</li>
                        </ul>
                    </div>
                </div >
                <HorizontalLine />
                <div className="resume">
                    <div className="resumeBtn"><a href={resume} download="Yuxuan Yao Resume">Resume</a></div>
                </div>



            </div >
        );
    }
}

export default Work;