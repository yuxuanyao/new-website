import '../css/skills.css';
import React from 'react';
import HorizontalLine from './line.js'


class Skills extends React.Component {
    render() {
        return (
            <div class="skills">
                <h1 className="skillsTitle">SKILLS</h1>
                <div class="row">
                    <div class="column" >
                        <h2>Programming Languages</h2>
                        <ul className="programming">
                            <li>C</li>
                            <li>C++</li>
                            <li>Python</li>
                            <li>MATLAB</li>
                        </ul>
                        <div className="line"></div>
                        <ul className="programmingweb">
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Swift</li>
                        </ul>



                        <h2 >Web Development</h2>
                        <ul className="webdev">
                            <li>MongoDB</li>
                            <li>Express.js</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                        </ul>

                        <div className="line"></div>

                        <ul className="webdevother">
                            <li>Django</li>
                            <li>Flask</li>
                            <li>JSX</li>
                            <li>React Native</li>
                        </ul>

                    </div>


                    <div class="column" >
                        <h2>Deep Learning</h2>
                        <ul className="deeplearning">
                            <li>Flow-based Models (Normalizing Flows)</li>
                            <li>Variational Autoencoders (VAE)</li>
                            <li>Generative Adversarial Networks (GAN)</li>
                            <li>Convolutional Neural Networks (CNN)</li>
                        </ul>
                        <div className="line" style={{ marginTop: '30px' }}></div>
                        <h2 >ML/DS Tools</h2>
                        <ul className="deeplearningtools">
                            <li>Scikit-learn</li>
                            <li>Keras</li>
                            <li>TensorFlow</li>
                            <li>OpenCV</li>
                            <li>PyTorch</li>
                            <li>Numpy</li>
                            <li>Matplotlib</li>
                            <li>Seaborn</li>
                        </ul>
                    </div>
                    <div class="column" >
                        <h2>Hardware / Blockchain</h2>
                        <ul className="hardware">
                            <li>Verilog HDL</li>
                            <li>ARM Assembly</li>
                            <li>Arduino</li>
                            <li>Circuit Analysis</li>
                            <li>Electronics</li>
                        </ul>
                        <div className="line"></div>
                        <ul className="blockchain">
                            <li>Solidity</li>
                            <li>Ethers.js</li>
                        </ul>

                        <h2>Non-tech</h2>
                        <ul className="nontech">
                            <li>Logic X (Music Production)</li>
                            <li>Final Cut Pro (Video Editing)</li>
                            <li>Adobe Photoshop/Lightroom</li>
                            <li>Microsoft Suite</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;