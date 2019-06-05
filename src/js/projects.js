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

        var pokemonText =
            <div>
                <p>My first encounter with data science! This was mainly a data visualization and analysis project where I took the data of over 800 pokemon from a dataset on Kaggle. This dataset contained their moves and other statistics for people to analyze them. </p>
                <p>Back then, Pokemon Go was still on my mind, so I decided to analyze the data and see what Pokemon I should actually catch. </p>
                <p>In the end, I was able to graph out the distribution of Pokemon Index and their stats, find which Pokemon have the highest attack, special attack, defense, special defense, HP, etc. </p>
                <p>It turns out that most of the OP pokemons are legendary Pokemons…</p>
            </div>

        var ganText =
            <div>
                <p>Generative Adversarial Network trained using the FMNIST dataset to generate a 10 by 10 array of clothing images that are 28 px by 28 px. </p>
                <p>This project was my first encounter with generative networks and was walked through by Toronto AI in a workshop at the University of Toronto.</p>
                <p>The project was built using TensorFlow eager execution and Keras. Both the generator and the discriminator were built using the convolutional networks provided by TensorFlow. </p>
            </div>

        var creditText =
            <div>
                <p>Implemented anomaly detection algorithms on a Credit Card Fraud dataset from Kaggle. This was a practice for me to get started with basic machine learning algorithms. Some of the algorithms I used were k-nearest neighbors and isolated forest. </p>
                <p>I was also able to analyze the outcome of my training and identify the incompetency of the data. I had achieved a classifier with very high accuracy, however, this was mainly due to the lack of “Fraud” data in both the training and validation set. The result was that the overall accuracy was very good, yet it does not detect Fraud data very well. </p>
            </div>

        var iotText =
            <div>
                <p>Self-sorting garbage can, isn’t that cool? This was a project done in the Telus x IEEE hackathon at the University of Toronto. The goal of this project was to create something that utilizes Node Red and the mBed system along with some particle IoT devices. </p>
                <p>We wanted to aim for sustainability, so we decided to build a prototype of a self-sorting garbage can. We used a web cam and adobe ActionScript to take pictures of what's inside the garbage can, we also trained a convolutional neural network to recognize pepsi bottles and others for the sake of prototyping. </p>
                <p>In the end, we were honored with a special mention in the competition and we were happy with the results.</p>
            </div>

        var sumoText =
            <div>
                <p>This is a project completed for the Sumo competition hosted by the University of Toronto's Robotics Association.</p>
                <p>The project utilized the following technologies:</p>
                <ul>
                    <li>Arduino UNO</li>
                    <li>Line sensor</li>
                    <li>Infrared sensor</li>
                    <li>Motors</li>
                    <li>Microcontroller</li>
                    <li>Sheet metal</li >
                    <li>PCB</li >
                    <li>AutoCAD</li>
                </ul>
                <p>Implementations</p>
                <ul>
                    <li>Search algorithm to search for the enemy robot</li>
                    <li>Arduino functions to interface data from microcontroller pins and program the motors to move.</li>
                    <li>Arduino functions to get data from the different sensors (line sensor, infrared sensor)</li>
                </ul>
            </div>

        var bikeText =
            <div>
                <p>Do you know how some advanced and modern cars have systems that warn you when another object is near your car? We wanted to do that for bikes. </p>
                <p>Advised by Professor Steve Mann at the University of Toronto, we were able to complete an Arduino program to calculate the speed of approaching the object and sends a message on the user’s mobile device through an Arduino Bluetooth module. With this, our team has only learned about Arduino circuits, but also Bluetooth communication and Arduino software development!</p>
            </div>

        var pw1Text =
            <div>
                <p>This was the first website that I made for myself to show case my experiences. I wanted to demonstrate everything that I’ve accomplished in an online portfolio, so I decided to utilize chronologically ordered events on my website to simulate a timeline. </p>
                <p>I used React.js in this project and it was hosted with Heroku. I utilized React’s specialty such as state, props, mounted components and more to create a more interactive website with parallax scrolling, sliding navbar, dynamic image opacity which ultimately resulted in a unique website!</p>
            </div>

        var pw2Text =
            <div>
                <p>This website that you are on right now! This website was again built in React.js, but uses a more structured code style and the files are more modular and organized! This time, the website is actually hosted on Github because I did not want to pay for Heroku anymore… (Heroku is really slow if you don’t pay)</p>
                <p>I followed a more modern tech style this time around and I think it turned out great! Feel free to play around with the animated features :)</p>
            </div>

        var catalogText =
            <div>
                <p>Fullstack library catalogue built with Django and written in Python.</p>
                <p>This application model a real library catalogue. Users can be classified into library admins and library members, and can log in through the Django admin page. I used the SQLite as the database to store information and books and users. I also added some front-end to create a modern log-in system supported by the Django backend. </p>
                <p>This project was unfortunately paused due to the lack of real-life usage.</p>
            </div>

        var tttText =
            <div>
                <p>I followed the Intro to React tutorial on the official React website to create this Tic Tac Toe game. I have made some modifications to this so it looks better :) </p>
                <ul>
                    <li>Responsiveness (enlarged game board on full screen desktop)</li>
                    <li>Tie Game (the original tutorial had "next move" displayed when neither players won</li>
                    <li>Color (I changed the color of the X's and O's to make it look more like the original game)</li>
                </ul>
            </div>

        var animeText =
            <div>
                <p>This was my first ever personal project! This is a very basic HTML and CSS project used to showcase my top 10 favorite anime. I utilized Bootstrap to create a somewhat responsive layout. </p>
                <p>This is a very basic static page to practice my web design skills and it’s also my first encounter with programming! </p>
            </div>

        var todoText =
            <div>
                <p>My first step into hackathons, at HackNYU.</p>
                <p>Back in my freshman year of university, I did not know anything about programming other than basic HTML/CSS syntax and extremely basic C code. Furthermore, at HackNYU I was unfortunately abandoned by the team in which I formed at the beginning of the hackathon</p>
                <p>In the end, I decided to create a to-do list with sentiment analysis. But because I was a one-man team, I was not able to do that and only completed the front-end part of the application. This is another practice website that I made to practice my web technologies</p>
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
                    <Activity title="Pokemon Data Analysis" bg={pokemon} carouselImg={cImgs} text={pokemonText} />
                    <Activity title="Generative Adversarial Networks" bg={gan} carouselImg={cImgs} text={ganText} />
                    <Activity title="Credit Card Fraud Detection" bg={credit} carouselImg={cImgs} text={creditText} />
                </div>

                <div className="projectSubtitle">Extracurriculars</div>
                <div className="projectGrid">
                    <Activity title="Telus X IEEE IoT Project" bg={iot} project="Smart Garbage Can" carouselImg={cImgs} text={iotText} />
                    <Activity title="Sumo Robotics" bg={sumo} carouselImg={cImgs} text={sumoText} />
                    <Activity title="Arduino Bicycle Safety" bg={bike} carouselImg={cImgs} text={bikeText} />
                </div>

                <div className="projectSubtitle">Web Development</div>
                <div className="projectGrid">
                    <Activity title="Personal Website V1" bg={pw1} carouselImg={cImgs} text={pw1Text} />
                    <Activity title="Personal Website V2" bg={pw2} carouselImg={cImgs} text={pw2Text} />
                    <Activity title="Fullstack Library Catalog" bg={catalog} carouselImg={cImgs} text={catalogText} />
                </div>

                <div className="projectSubtitle">Others</div>
                <div className="projectGrid" style={{ paddingBottom: '80px' }}>
                    <Activity title="React Tic-Tac-Toe" bg={ttt} carouselImg={cImgs} text={tttText} />
                    <Activity title="Anime Website" bg={anime} carouselImg={cImgs} text={animeText} />
                    <Activity title="To Do List" bg={todo} carouselImg={cImgs} text={todoText} />

                </div>
            </div>
        );

    }
}

export default Projects;

