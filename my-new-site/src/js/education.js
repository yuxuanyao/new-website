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

                    <p>3rd year • Sep 2019</p>
                    <i>
                        <p>Computer Engineering Major</p>
                        <p>Software Specialization</p>
                        <p>Artificial Intelligence Minor</p>
                        <p>Engineering Business Minor</p>
                    </i>

                </div>
                {/* </div> */}

            </div>
        );
    }
}

export default Education;