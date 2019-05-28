import '../css/projects.css';
import React from 'react';
import Activity from './activity.js';

import Particles from 'react-particles-js';
import ParticlesConfig from './particlesjs-config.json'

import treehacks from '../images/projects/TreeHacks.png';
import uofthacks from '../images/projects/UofTHacks.png';
import hackprinceton from '../images/projects/hackPrinceton.jpg';



class Projects extends React.Component {

    render() {
        return (
            <div className="extra">
                <Particles params={ParticlesConfig} className="particle" />

                <div className="extraTitle">PROJECTS</div>

                <div className="activityGrid">
                    <Activity title="TreeHacks" bg={treehacks} />
                    <Activity title="UofTHacks VI" bg={uofthacks} />
                    <Activity title="HackPrinceton" bg={hackprinceton} />
                </div>
            </div>
        );


    }
}

export default Projects;