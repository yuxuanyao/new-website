import '../css/skills.css';
import React from 'react';



class Skills extends React.Component {
    render() {
        return (
            <div class="skills">
                <h1 className="skillsTitle">SKILLS</h1>
                <div class="row">


                    <div class="column" >
                        <h2>Programming Languages</h2>
                        <ul>
                            <li>C</li>
                            <li>C++</li>
                            <li>Python</li>
                            <li>MATLAB</li>
                        </ul>
                        <ul>
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Swift</li>
                        </ul>
                        <h2>Web Development Technologies</h2>
                        <p className="subheader">MERN Stack</p>
                        <ul>
                            <li>MongoDB</li>
                            <li>Express.js</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                        </ul>
                        <p className="subheader">Others</p>
                        <ul>
                            <li>Django</li>
                            <li>Flask</li>
                            <li>JSX</li>
                            <li>React Native</li>
                        </ul>
                    </div>


                    <div class="column" >
                        <p className="subheader">Generative Models</p>
                        <ul>
                            <li>Flow-based Models (Normalizing Flows)</li>
                            <li>Variational Autoencoders (VAE)</li>
                            <li>Generative Adversarial Networks (GAN)</li>
                        </ul>
                        <p className="subheader">Others</p>
                        <ul>
                            <li>Convolutional Neural Networks (CNN)</li>
                        </ul>
                        <p className="subheader">ML/DS Tools</p>
                        <ul>
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
                        <h2>Miscellaneous</h2>
                        <p className="subheader">Hardware</p>
                        <ul>
                            <li>Verilog HDL</li>
                            <li>ARM Assembly</li>
                            <li>Arduino</li>
                        </ul>
                        <p className="subheader">Blockchain</p>
                        <ul>
                            <li>Solidity</li>
                            <li>Ethers.js</li>
                        </ul>
                        <p className="subheader">Non-tech</p>
                        <ul>
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