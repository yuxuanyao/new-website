import '../css/activity.css';
import '../css/modal.css';
import React from 'react';
import Modal from 'react-bootstrap/Modal';





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
            <div className="activity" >

                <div className="activityBlock" variant="primary" onClick={this.handleShow} style={{ backgroundImage: `url(${this.props.bg})` }}>
                    <div className="activityTitle">{this.props.title}</div>

                </div>

                <div class="activityOverlay"></div>



                <Modal show={this.state.show} onHide={this.handleClose} style={{ padding: 0 }}>
                    <Modal.Header closeButton>
                        <Modal.Title >{this.props.title}</Modal.Title>

                    </Modal.Header>

                    <Modal.Body>
                        <div className="projectTitle">{this.props.project}</div>





                    </Modal.Body>

                    <Modal.Footer></Modal.Footer>

                </Modal>
            </div>

        );

    }

}

export default Activity;