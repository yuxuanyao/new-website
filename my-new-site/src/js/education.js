import '../css/education.css';
import React from 'react';




class Education extends React.Component {
    render() {
        return (
            <div class="education">
                <h1 className="educationTitle">EDUCATION</h1>

                {/* <div className="educationContents"> */}

                <div className="educationText">

                    <div className="univeristy">University of Toronto St. George</div>
                    <p>3rd year</p>
                    <p>Major: Computer Engineering</p>
                    <p>Specialization: Software</p>
                    <p>Minor: Artificial Intelligence</p>
                    <p>Minor: Engineering Business</p>


                </div>
                {/* </div> */}

            </div>
        );
    }
}

export default Education;