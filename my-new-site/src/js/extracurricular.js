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

    render() {
        return (
            <div className="extra">
                <Particles params={ParticlesConfig} className="particle" />

                <div className="extraTitle">LEADERSHIP</div>

                <div className="activityGrid">
                    <Activity title="ILead" bg={ilead} />
                    <Activity title="IEEE" bg={ieee} />
                    <Activity title="UtraHacks" bg={utrahacks} />

                    <Activity title="UTRA" bg={utra} />
                    <Activity title="F!rosh" bg={frosh} />
                    <Activity title="Robokids" bg={robokids} />
                </div>



            </div>

        );

    }

}

export default Extracurricular;