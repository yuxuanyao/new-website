import '../css/projects.css';
import React from 'react';
import Activity from './activity.js';

import Particles from 'react-particles-js';
import ParticlesConfig from './particlesjs-config.json'

import treehacks from '../images/projects/TreeHacks.png';
import uofthacks from '../images/projects/UofTHacks.png';
import hackprinceton from '../images/projects/hackPrinceton.jpg';

import fpgatrumpet from '../images/projects/fpgaTrumpet.jpg';
import gis from '../images/projects/gis.png';
import spaceracer from '../images/projects/spaceracer.jpg';

import bike from '../images/projects/bike.jpg';
import iot from '../images/projects/iot.jpg';
import sumo from '../images/projects/sumoBot.png';



class Projects extends React.Component {

    render() {
        return (
            <div className="extra">
                <Particles params={ParticlesConfig} className="particle" />

                <div className="extraTitle">PROJECTS</div>

                <div className="activityGrid">
                    <Activity title="UofTHacks VI" bg={uofthacks} />
                    <Activity title="TreeHacks" bg={treehacks} />
                    <Activity title="HackPrinceton" bg={hackprinceton} />

                    <Activity title="Mapping System" bg={gis} />
                    <Activity title="Space Racer" bg={spaceracer} />
                    <Activity title="FPGA Trumpet" bg={fpgatrumpet} />

                    <Activity title="Telus X IEEE IoT Hackathon" bg={iot} />
                    <Activity title="Sumo Robotics" bg={sumo} />
                    <Activity title="Arduino Bicycle Safety" bg={bike} />
                </div>

                <div>Commits</div>

            </div>
        );


    }
}

export default Projects;