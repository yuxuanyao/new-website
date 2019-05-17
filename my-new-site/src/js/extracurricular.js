import '../css/extracurricular.css';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Activity from './activity.js'



class Extracurricular extends React.Component {

    render() {
        return (
            <div className="extra">
                <div className="extraTitle">LEADERSHIP</div>

                <div className="activityGrid">
                    <Activity title="UTRA" />
                    <Activity title="IEEE" />
                    <Activity title="UtraHacks" />
                    <Activity title="ILead" />
                    <Activity title="F!rosh" />
                    <Activity title="Robokids" />
                </div>




                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </div>

        );

    }

}

export default Extracurricular;