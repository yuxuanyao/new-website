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
import spaceracer from '../images/projects/spaceracer.jpeg';

import bike from '../images/projects/bike.jpg';
import iot from '../images/projects/iot.jpg';
import sumo from '../images/projects/sumoBot.jpg';

import credit from '../images/projects/credit.jpeg';
import pokemon from '../images/projects/pokemon.jpg';
import gan from '../images/projects/gan.jpg';

import pw1 from '../images/projects/pw1.png';
import pw2 from '../images/projects/pw2.png';
import catalog from '../images/projects/catalog.png';

import todo from '../images/projects/todo.png';
import anime from '../images/projects/anime.png';
import ttt from '../images/projects/ttt.png';



class Projects extends React.Component {

    render() {
        return (
            <div className="extra">
                <Particles params={ParticlesConfig} className="particle" />

                <div className="extraTitle">PROJECTS</div>
                <div className="projectSubtitle">Hackathons</div>
                <div className="projectGrid">
                    <Activity title="UofTHacks VI" bg={uofthacks} />
                    <Activity title="TreeHacks" bg={treehacks} />
                    <Activity title="HackPrinceton" bg={hackprinceton} />
                </div>
                <div className="projectSubtitle">Course Projects</div>
                <div className="projectGrid">
                    <Activity title="Space Racer" bg={spaceracer} />
                    <Activity title="Geographic Information System" bg={gis} />
                    <Activity title="FPGA Trumpet" bg={fpgatrumpet} />
                </div>

                <div className="projectSubtitle">Machine Learning</div>
                <div className="projectGrid">
                    <Activity title="Pokemon Data Analysis" bg={pokemon} />
                    <Activity title="Generative Adversarial Networks" bg={gan} />
                    <Activity title="Credit Card Fraud Detection" bg={credit} />
                </div>

                <div className="projectSubtitle">Extracurriculars</div>
                <div className="projectGrid">
                    <Activity title="Telus X IEEE IoT Project" bg={iot} />
                    <Activity title="Sumo Robotics" bg={sumo} />
                    <Activity title="Arduino Bicycle Safety" bg={bike} />
                </div>

                <div className="projectSubtitle">Web Development</div>
                <div className="projectGrid">
                    <Activity title="Personal Website V1" bg={pw1} />
                    <Activity title="Personal Website V2" bg={pw2} />
                    <Activity title="Fullstack Library Catalog" bg={catalog} />
                </div>

                <div className="projectSubtitle">Others</div>
                <div className="projectGrid" style={{ paddingBottom: '80px' }}>
                    <Activity title="React Tic-Tac-Toe" bg={ttt} />
                    <Activity title="To Do List" bg={todo} />
                    <Activity title="Anime Website" bg={anime} />
                </div>






                <div>Commits</div>

            </div>
        );


    }
}

export default Projects;