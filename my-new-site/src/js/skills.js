import '../css/education.css';
import React from 'react';



class Skills extends React.Component {
    render() {
        return (
            <div class="skills">
                <h1 className="educationTitle">EDUCATION</h1>

                <div className="educationText">

                    <img className="uoftlogo" src={uoft}></img>
                    <div className="univeristy">St. George Campus</div>

                    <p>3rd year • Sep 2019</p>
                    <i>
                        <p>BASc in Computer Engineering</p>
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