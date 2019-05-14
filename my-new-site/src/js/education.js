import '../css/education.css';
import React from 'react';




class Education extends React.Component {
    render() {
        return (
            <div class="education">
                <h1 className="educationTitle">EDUCATION</h1>

                {/* <div className="educationContents"> */}

                <div className="educationText">

                    <div className="univeristy">University of Toronto, St. George</div>
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