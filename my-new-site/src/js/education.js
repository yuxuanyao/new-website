import '../css/education.css';
import React from 'react';
import uoft from '../images/uoftlogo.png';



class Education extends React.Component {
    render() {
        return (
            <div class="education">
                <h1 className="educationTitle">EDUCATION</h1>

                {/* <div className="educationContents"> */}

                <div className="educationText">

                    <img className="uoftlogo" src={uoft}></img>
                    <div className="univeristy">St. George Campus</div>

                    <p style={{ fontSize: '22px', color: '#000' }}>3rd year • Sep 2019</p>

                </div>

                <div className="educationContainer">
                    <p><b>BASc in Computer Engineering</b></p>
                    <p>Software Specialization</p>
                    <p>Artificial Intelligence Minor</p>
                    <p>Engineering Business Minor</p>

                    <button>Software Courses</button>
                    <button>Hardware Courses</button>
                    <button>Electrical Courses</button>
                    <button>Math Courses</button>
                </div>

            </div>
        );
    }
}

export default Education;