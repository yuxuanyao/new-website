import '../css/activity.css';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



class Activity extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div className="activity">

                <div className="activityBlock" variant="primary" onClick={this.handleShow}>

                    <div className="activityTitle">{this.props.title}</div>


                </div>



                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

                    <Modal.Footer></Modal.Footer>

                </Modal>
            </div>

        );

    }

}

export default Activity;