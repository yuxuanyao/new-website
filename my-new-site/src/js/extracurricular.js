import '../css/extracurricular.css';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Activity from './activity.js'



class Extracurricular extends React.Component {

    render() {
        return (
            <div className="extracurriculars">
                <div className="extraTitle">LEADERSHIP</div>
                <Activity />
            </div>

        );

    }

}

export default Extracurricular;