import '../css/courses.css';
import React from 'react';


class Courses extends React.Component {
    render() {
        return (
            <div className="courses">

                <div className="coursesContainer">

                    <div className="courseBtn">Software Courses</div>
                    <div className="courseBtn">Hardware Courses</div>
                    <div className="courseBtn">Electrical Courses</div>
                    <div className="courseBtn">Math Courses</div>

                </div >

            </div >
        );
    }
}

export default Courses;