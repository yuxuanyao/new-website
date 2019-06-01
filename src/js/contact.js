import React from 'react';
import '../css/contact.css'
import Particles from 'react-particles-js';
import ParticlesConfig from './particlesjs-config.json'

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <Particles params={ParticlesConfig} className="particle" />
                <div className="contactTitle">CONTACT ME</div>
                <div className="email">yuxuan.yao@mail.utoronto.ca</div>
                <ul class="social-networks diamond to-round spin-icon rise-up">
                    <li><a href="https://www.linkedin.com/" class="icon-linkedin">LinkedIn</a></li>
                    <li><a href="https://github.com" class="icon-github">GitHub</a></li>
                    <li><a href="https://www.facebook.com/" class="icon-facebook">Facebook</a></li>
                    <li><a href="https://instagram.com" class="icon-instagram">Instagram</a></li>
                    <li><a href="https://twitter.com/" class="icon-twitter">Twitter</a></li>
                </ul>

                <div className="copyright">
                    <div >Copyright © 2019</div>
                    <div >All rights reserved</div>
                </div>

            </div >
        );
    }
}


export default Contact;