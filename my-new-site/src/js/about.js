import '../css/about.css';
import React from 'react';
import pfp from '../images/fbpfp.jpg'


class About extends React.Component {
    render() {
        return (
            <div class="about">
                <img className="pfp" src={pfp}></img>
                {/* <h1>About Me</h1> */}


            </div>
        );
    }
}

export default About;