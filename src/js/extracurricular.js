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
        if (this.state.display == 1) {
            return (
                <div className="extra">
                    <Particles params={ParticlesConfig} className="particle" />

                    <div className="extraTitle">LEADERSHIP</div>

                    <div className="activityGrid">
                        <Activity title="ILead" bg={ilead} project="University of Toronto Smoking Ban" />
                        <Activity title="IEEE" bg={ieee} />
                        <Activity title="UTRA" bg={utra} />

                        <Activity title="UtraHacks" bg={utrahacks} />
                        <Activity title="F!rosh" bg={frosh} />
                        <Activity title="Robokids" bg={robokids} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="extra">
                    <Particles params={ParticlesConfig} className="particle" />

                    <div className="extraTitle">LEADERSHIP</div>

                    <div className="activityGrid">
                        <Activity title="ILead" bg={ilead} project="University of Toronto Smoking Ban" />
                        <Activity title="IEEE" bg={ieee} project="Marketing Associate" />
                        <Activity title="UtraHacks" bg={utrahacks} project="Executive Director / Project Manager" />

                        <Activity title="UTRA" bg={utra} project="Webmaster / Sponsorships Director" />
                        <Activity title="F!rosh" bg={frosh} project="Undercover F!rosh" />
                        <Activity title="Robokids" bg={robokids} project="Robotics Instructor" />
                    </div>
                </div>
            );
        }


    }

}

export default Extracurricular;