import '../css/education.css';
import React from 'react';
import uoft from '../images/education/uoftlogo.png';
import HorizontalLine from './line.js'



class Education extends React.Component {
    render() {
        return (
            <div className="education">
                <h1 className="educationTitle">EDUCATION</h1>

                <div className="educationText">

                    <img className="uoftlogo" src={uoft}></img>
                    <div className="univeristy" style={{ fontFamily: 'Centaur', color: '#00204e' }}>St. George Campus</div>
                    <p style={{ fontSize: '22px', color: '#000' }}>3rd year • Sep 2019</p>

                </div>

                <div className="educationContainer">
                    <p><b>BASc in Computer Engineering</b></p>
                    <p>Software Specialization</p>
                    <p>Artificial Intelligence Minor</p>
                    <p>Engineering Business Minor</p>
                </div>

            </div>
        );
    }
}

export default Education;