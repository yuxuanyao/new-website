import '../css/about.css';
import React from 'react';
import pfp from '../images/pfp.png';
import ai from '../images/ai.png';
import fullstack from '../images/fullstack.png';
import webdev from '../images/webdev.png'
import quant from '../images/quant.png'



class About extends React.Component {
    render() {
        return (
            <div class="about">
                <h1 className="aboutTitle">ABOUT ME</h1>

                <div className="aboutContent">

                    <div className="imageContainer">
                        <img className="pfp" src={pfp}></img>

                        {/* <div className="techIconContainer">
                            <img className="techIcon" src={ai}></img>
                            <img className="techIcon" src={fullstack}></img>
                            <img className="techIcon" src={webdev}></img>
                            <img className="techIcon" src={quant}></img>
                        </div> */}
                    </div>


                    <div className="aboutText">
                        <p>Hi there! My name is Yuxuan, and here is an introduction about myself!  </p>

                        <p>I was born in Nanjing, China. When I was 8 years old, I moved to Vancouver, Canada to complete my elementary and secondary education.
                            In 2017, I decided to move again to the biggest Canadian city, pursue a higher education at the University of Toronto
                        </p>
                        <ul>
                            <li>Going into my 3rd year at the University of Toronto St. George Campus</li>
                            <li>Major in Computer Engineering, specializing in the Software stream</li>
                            <li>Minor in Artificial Intelligence</li>
                        </ul>



                        <p>Computer Engineering provided me with knowledge for both software and hardware.
                            Aside from my academics, I also have passion and interest for other areas which I hope to explore and dive deeper into such as: </p>

                        <ul>
                            <li>Machine Learning/Deep Learning</li>
                            <li>Fullstack Development</li>
                            <li>Software Development</li>
                            <li>Quantitative Analysis</li>
                        </ul>


                    </div>


                </div>

            </div>
        );
    }
}

export default About;