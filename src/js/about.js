import '../css/about.css';
import '../css/education.css';
import React from 'react';
import pfp from '../images/about/pfp.jpg';
import ai from '../images/about/ai.png';
import fullstack from '../images/about/fullstack.png';
import webdev from '../images/about/webdev.png'
import quant from '../images/about/quant.png'



class About extends React.Component {
    render() {
        return (
            <div class="about">
                <h1 className="aboutTitle">ABOUT ME</h1>

                <div className="aboutContent">

                    <img className="pfp" src={pfp}></img>


                    <div className="aboutText">
                        <p>Hi there! My name is Yuxuan, and here is an introduction about myself!  </p>

                        <p>I was born in Nanjing, China. When I was 8 years old, I moved to Vancouver, Canada to complete my elementary and secondary education.
                            In 2017, I decided to move again to the largest Canadian city, Toronto, to pursue a higher education in Computer Engineering
                        </p>

                        <p>Computer Engineering provided me with knowledge for both software and hardware.
                            Aside from my academics, I also have passion and interest for other areas which I hope to explore and dive deeper into such as: </p>

                        <ul>
                            <li>Machine Learning/Deep Learning</li>
                            <li>Fullstack Development</li>
                            <li>Software Development</li>
                            <li>Quantitative Analysis</li>
                        </ul>

                        <p>During my spare time, I really enjoy attending hackathons as it not only allows me to learn a LOT, but it also provides me with an excuse to travel!
                            I also really like to think of creative to help the community using technology through building personal projects, which can be found below.
                        </p>
                        <p>My non-technical hobbies comes and go. Currently, I enjoy music production, entrepreneurship, photography, and food. In the past, I've
                            enjoyed dancing, singing, piano, cooking, and fashion!
                        </p>

                    </div>

                    <div className="techIconContainer">
                        <img className="techIcon" src={ai}></img>
                        <img className="techIcon" src={fullstack}></img>
                        <img className="techIcon" src={webdev}></img>
                        <img className="techIcon" src={quant}></img>
                    </div>

                </div >

            </div >
        );
    }
}

export default About;