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

        var cImgs = [anime, anime]

        var uofthacksText =
            <div>
                <p>Best Aragon App Award (Best Blockchain)</p>
                <p>Think AirBnB for cars, using the Ethereum Blockchain</p>
                <p>EtherRide serves as an Escrow system which allows the user to rent from a list of vehicles that are registered with SmartCar. Through the use of smart contracts from the Aragon Platform, location data and travel patterns are preserved from third-party access. </p>
                <p>After selecting a car on the landing page, the user can create a transaction using the Ethereum blockchain. When the transaction goes through, the Car would be unlocked through a request to SmartCar API to unlock the door.</p>
            </div>

        var treehacksText =
            <div>
                <p>People often listen to music or a podcast as they head to bed -- Often, just about you're doze off, you have to shake yourself awake, just to fiddle with your phone or rip out your headphones. For the sake of a better night sleep, we decided to make an app to rectify this problem. </p>
                <p>Our app allows one to use voice commands to start off the in-app music player and accelerometer. The phone then uses the accelerometer to sense as a person falls asleep, gradually turning down the volume, and stopping the audio entire once we've detected you've entered deep sleep. </p>
                <p>In addition, you can also set an alarm time, where our app will start to look for signs of movement and wakefulness, and begin quietly playing music to wake you up, gradually increasing the volume as the user awakes. </p>
                <p>We used Node.js for back-end and React Native for front-end, utilizing the SoundHound API and Expo.io.</p>
            </div>

        var hackprincetonText =
            <div>
                <p>Driving around a parking lot and cruising every little corner only to find out that it is completely filled can be very frustrating. So we decided to tackle this problem in our own little way using computer vision. </p>
                <p>The program makes use of existing security cameras in parking lots and detects for cars. From there, we display the data in a format that is consistent with the layout of the parking lot, but with occupied spaces filled red, vacant spaces filled green.</p>
                <p>As a 2 man team, we are proud of pulling ourselves together after a critical situation and managing to put together a working model that isn't too far from what we planned. </p>
                <p>We learned a lot about python, especially the library OpenCV.Also, even though it did not end up working for us, but through experimenting with Google Vision API and Clarifai API, we learned the in 's and out's of the APIs and learned what kind of situations call for the use of them. </p >
            </div>

        var spaceracerText =
            <div>
                <p>Old School Space Racer Arcade game. </p>
                <p>In this game, players control two space ships and race against each other in a field of asteroids. Players get a point each time they reach the other side of the map. However, if they get hit by an asteroid, their position is reset to the start. After a player reached the other side of the map, players also reset to the start. </p>
                <p>This game was built using C and some ARM assembly for the ECE243 Course (Computer Organization) and can be run on the DE1-SoC board’s ARM processor. </p>
            </div>

        var gisText =
            <div>
                <p>Courier Navigation System built in C++ using EZGL and GTK.</p>
                <p>Rank 12/110</p>
                <p>This application uses OpenStreetMap data to display a Graphical User Interface (GUI) with the option to select maps from different cities to display. Additional functions like “Search and Zoom”, “Night Mode”, “Path-finding” and “Path Routing” </p>
                <p>The pathfinding functionality was achieved through an Object-Oriented (OOP)  implementation of the A* Algorithm, which is an improvement of Dijkstra’s Algorithm with a heuristic. </p>
                <p>The ultimate purpose of this project is to provide a navigation system for couriers to deliver items. This is a variation of the Travelling Salesman Problem (TSP). </p>
                <p>Our task, the Travelling Courier Problem, have the following constraints:</p>
                <ul>
                    <li>Start and End points of each courier delivery</li>
                    <li>Packages and Delivery Locations</li>
                    <li>Truck Capacity of Delivery Truck``</li>
                </ul>

                <p>Our final goal is to provide an optimized algorithm for a Courier to deliver all the items with the most efficient route possible.</p>
                <p>We accomplished this through the use of a high performant multi-threaded approach to iterative algorithms including Two Opt, Three Opt, Four Opt Star, Genetic Algorithms, and Simulated Annealing, which ultimately ranked us 12/110 teams in our faculty. </p>
            </div>

        var fpgatrumpetText =
            <div>
                <p>Trumpet practice tool implemented in Verilog HDL on the DE1 SoC for the ECE241 Course at the University of Toronto. </p>
                <p>It is difficult for beginner trumpet players to play using the right airflow and remember the fingering for each note, as some notes have the same fingering, but have different airflow requirements.</p>
                <p>The digital circuit takes input from a microphone and the DE1-SoC's KEY[3:1] and process it to determine what note should be played. A speaker then outputs sounds of pre-recorded trumpet notes. A monitor displays all notes from C4 to C5. When a note is played, the corresponding note lights up on the monitor.</p>
                <p>All the digital circuits in the FPGA were written in Verilog Hardware Description Language, on the Altera DE1-SoC Board with Cyclone V FPGA by Intel.</p>
                <ul>
                    <li>Created different modules for audio in and audio out by sending and processing the signals received from the Altera University Audio Controller.</li>
                    <li>Initialized on-chip memory for pre-recorded audio and images to be displayed on the monitor through VGA.</li>
                    <li>Processed the Microphone input through the use of an averaging algorithm by counting the number of times the audio input waveform's amplitude is above a threshold value. This is done for multiple threshold values and the highest one is used for the air flow to determine which trumpet note is played.</li>
                </ul>

            </div>










        return (
            <div className="extra">
                <Particles params={ParticlesConfig} className="particle" />

                <div className="extraTitle">PROJECTS</div>
                <div className="projectSubtitle">Hackathons</div>
                <div className="projectGrid">
                    <Activity title="UofTHacks VI" bg={uofthacks} project="EtherRide" carouselImg={cImgs} text={uofthacksText} />
                    <Activity title="TreeHacks" bg={treehacks} project="Turn Down for What?" carouselImg={cImgs} text={treehacksText} />
                    <Activity title="HackPrinceton" bg={hackprinceton} project="Avacancy" carouselImg={cImgs} text={hackprincetonText} />
                </div>
                <div className="projectSubtitle">Course Projects</div>
                <div className="projectGrid">
                    <Activity title="ARM Space Racer" bg={spaceracer} carouselImg={cImgs} text={spaceracerText} />
                    <Activity title="Geographic Information System" bg={gis} carouselImg={cImgs} text={gisText} />
                    <Activity title="FPGA Trumpet" bg={fpgatrumpet} carouselImg={cImgs} text={fpgatrumpetText} />
                </div>

                <div className="projectSubtitle">Machine Learning</div>
                <div className="projectGrid">
                    <Activity title="Pokemon Data Analysis" bg={pokemon} carouselImg={cImgs} />
                    <Activity title="Generative Adversarial Networks" bg={gan} carouselImg={cImgs} />
                    <Activity title="Credit Card Fraud Detection" bg={credit} carouselImg={cImgs} />
                </div>

                <div className="projectSubtitle">Extracurriculars</div>
                <div className="projectGrid">
                    <Activity title="Telus X IEEE IoT Project" bg={iot} project="Smart Garbage Can" carouselImg={cImgs} />
                    <Activity title="Sumo Robotics" bg={sumo} carouselImg={cImgs} />
                    <Activity title="Arduino Bicycle Safety" bg={bike} carouselImg={cImgs} />
                </div>

                <div className="projectSubtitle">Web Development</div>
                <div className="projectGrid">
                    <Activity title="Personal Website V1" bg={pw1} carouselImg={cImgs} />
                    <Activity title="Personal Website V2" bg={pw2} carouselImg={cImgs} />
                    <Activity title="Fullstack Library Catalog" bg={catalog} carouselImg={cImgs} />
                </div>

                <div className="projectSubtitle">Others</div>
                <div className="projectGrid" style={{ paddingBottom: '80px' }}>
                    <Activity title="React Tic-Tac-Toe" bg={ttt} carouselImg={cImgs} />
                    <Activity title="Anime Website" bg={anime} carouselImg={cImgs} />
                    <Activity title="To Do List" bg={todo} carouselImg={cImgs} />
                </div>
            </div>
        );

    }
}

export default Projects;

