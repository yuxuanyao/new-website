import '../css/extracurricular.css';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Activity from './activity.js'

import frosh from '../images/extracurriculars/frosh.jpg'
import utrahacks from '../images/extracurriculars/utraHacks.png'
import utra from '../images/extracurriculars/utra.jpg'
import ieee from '../images/extracurriculars/ieee.png'
import robokids from '../images/extracurriculars/robokids.jpg'
import ilead from '../images/extracurriculars/ilead.jpg'

import ilead_p1 from '../images/leaderContent/ilead_p1.png'
import utra_p1 from '../images/leaderContent/utra_p1.png'
import utrahacks_p1 from '../images/leaderContent/utrahacks_p1.png'
import robo_p1 from '../images/leaderContent/robo_p1.png'
import ieee_p1 from '../images/leaderContent/ieee_p1.png'
import frosh_p1 from '../images/leaderContent/frosh_p1.png'


import Particles from 'react-particles-js';
import ParticlesConfig from './particlesjs-config.json'

class Extracurricular extends React.Component {

    state = {
        display: 0,
    }




    updateDimensions = () => {
        if (window.innerWidth < 992 && window.innerWidth > 700) {
            this.setState({ display: 1 })
        } else {
            this.setState({ display: 0 })
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        var ilead_p = [ilead_p1]
        var utra_p = [utra_p1]
        var utrahacks_p = [utrahacks_p1]
        var robo_p = [robo_p1]
        var ieee_p = [ieee_p1]
        var frosh_p = [frosh_p1]

        var ileadText =
            <div>
                <p>Our vision is to reduce second-hand smoking on the  U of T St. George campus to improve the health of students at our University. </p>
                <p>Our scope was first improving the health of the entire Toronto, however as we became more of our time and resource constraints, we were able to scope down to our campus for more impact. </p>
                <p>In the end, we decided to employ a method of nudges where we use small actions to help people recognize the impact of both smoking and second-hand smoking to ultimately assist people in quitting tobacco products.</p>
            </div>

        var ileadText =
            <div>
                <p>Our vision is to reduce second-hand smoking on the  U of T St. George campus to improve the health of students at our University. </p>
                <p>Our scope was first improving the health of the entire Toronto, however as we became more of our time and resource constraints, we were able to scope down to our campus for more impact. </p>
                <p>In the end, we decided to employ a method of nudges where we use small actions to help people recognize the impact of both smoking and second-hand smoking to ultimately assist people in quitting tobacco products.</p>
            </div>

        var utrahacksText =
            <div>
                <p>UtraHacks is an annual Makeathon hosted by the University of Toronto’s Robotics Association to help engineering students across North America to gain more practical and hands-on skills to prepare them for the industry. </p>
                <p>Currently, I am the Executive Director for this event, meaning that I’m in charge of planning and organizing the entire event with another co-lead. Our roles include recruiting and interviewing an executive team, reaching out to sponsors, planning out the room booking and catering and other  logistics included in the event. </p>
                <p>In my freshman year, as part of the sponsorships team, I am responsible for translating the need to the hackathon into emails sent out to potential sponsors for the hackathon. This enabled me to improve on my email writing skills take initiative in creating documents on google drive that would assist the team. </p>
            </div>

        var utraText =
            <div>
                <p>The University of Toronto Robotics Association is a club aimed to further students’ knowledge of practical robotics skills. We have 6 design teams within the club including RoboSoccer, SUMO, Autonomous Rover, 3D printing, and more. </p>
                <p>Currently, I am the Webmaster of the club. My main role is to update the UTRA website with the most updated information about sub-teams and executives. The Web stack consists of HTML/CSS/JS and a bit of JQuery.</p>
                <p>In my sophomore year, I was working on the sponsorships team to reach out and find more sponsors of the club. Some of my accomplishments include: leading the sponsorships team to organize UtraHacks to accommodate over 250 students in the event and acquiring sponsorship from Solidworks, Particle, Leapmotion, Nvidia totaling over $4000 in value</p>
            </div>

        var ieeeText =
            <div>
                <p>Marketing Associate of the club for the computer chapter, I am extremely passionate about the software industry and my role is to promote the IEEE events school-wide and province-wide to expose even more students to the STEM industry.</p>
                <p>In the school year, I will likely be making efforts to organize and advertize the following events: HelloCon, StarterHacks, and MakeUofT</p>
            </div>

        var froshText =
            <div>
                <p>F!rosh is the orientation week at the University of Toronto for freshman students to get to know more about University life. A lot of the times, freshmen are very shy and introverted because it is a brand new environment.</p>
                <p>Undercover F!rosh are upper year students who join the orientation activities to encourage freshmen to be more outgoing and talk to more people. I joined this activity so I could help other students to have a better experience at F!rosh and make more friends.</p>
            </div>

        var roboText =
            <div>
                <p>Robokids is an organization that teaches elementary/high school students about Robotics and other STEAM related topics. My role was a robotics instructor to teach groups of students over the course of a summer. I also hosted some week-long summer camps for younger children as well. </p>
                <p>I Improved students Computer Science fundamentals with Scratch, Robot C, VEX IQ, instructed over 30 students to increase their robotics assessment by 2 levels and educated students on 3D design concepts with Lego Mindstorm, TinkerCAD.</p>
            </div>

        if (this.state.display == 1) {
            return (
                <div className="extra">
                    <Particles params={ParticlesConfig} className="particle" />

                    <div className="extraTitle">LEADERSHIP</div>

                    <div className="activityGrid">
                        <Activity title="ILead" bg={ilead} project="University of Toronto Smoking Ban" carouselImg={ilead_p} text={ileadText} />
                        <Activity title="IEEE" bg={ieee} project="Marketing Associate" carouselImg={ieee_p} text={ieeeText} />
                        <Activity title="UTRA" bg={utra} project="Executive Director / Project Manager" carouselImg={utra_p} text={utrahacksText} />

                        <Activity title="UtraHacks" bg={utrahacks} project="Webmaster / Sponsorships Director" carouselImg={utrahacks_p} text={utrahacksText} />
                        <Activity title="F!rosh" bg={frosh} project="Undercover F!rosh" carouselImg={frosh_p} text={froshText} />
                        <Activity title="Robokids" bg={robokids} project="Robotics Instructor" carouselImg={robo_p} text={roboText} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="extra">
                    <Particles params={ParticlesConfig} className="particle" />

                    <div className="extraTitle">LEADERSHIP</div>

                    <div className="activityGrid">
                        <Activity title="ILead" bg={ilead} project="University of Toronto Smoking Ban" carouselImg={ilead_p} text={ileadText} />
                        <Activity title="IEEE" bg={ieee} project="Marketing Associate" carouselImg={ieee_p} text={ieeeText} />
                        <Activity title="UtraHacks" bg={utrahacks} project="Executive Director / Project Manager" carouselImg={utrahacks_p} text={utrahacksText} />

                        <Activity title="UTRA" bg={utra} project="Webmaster / Sponsorships Director" carouselImg={utra_p} text={utraText} />
                        <Activity title="F!rosh" bg={frosh} project="Undercover F!rosh" carouselImg={frosh_p} text={froshText} />
                        <Activity title="Robokids" bg={robokids} project="Robotics Instructor" carouselImg={robo_p} text={roboText} />
                    </div>
                </div>
            );
        }


    }

}

export default Extracurricular;