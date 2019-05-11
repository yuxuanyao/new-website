import '../css/about.css';
import React from 'react';
import pfp from '../images/pfp.png'


class About extends React.Component {
    render() {
        return (
            <div class="about">
                <h1 className="aboutTitle">ABOUT ME</h1>
                <img className="pfp" src={pfp}></img>
            </div>
        );
    }
}

export default About;