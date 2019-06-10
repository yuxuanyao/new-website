import '../css/courses.css';
import React from 'react';
import Modal from 'react-bootstrap/Modal';


class Courses extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow1 = this.handleShow1.bind(this);
        this.handleClose1 = this.handleClose1.bind(this);

        this.handleShow2 = this.handleShow2.bind(this);
        this.handleClose2 = this.handleClose2.bind(this);

        this.handleShow3 = this.handleShow3.bind(this);
        this.handleClose3 = this.handleClose3.bind(this);

        this.handleShow4 = this.handleShow4.bind(this);
        this.handleClose4 = this.handleClose4.bind(this);

        this.state = {
            show1: false,
            show2: false,
            show3: false,
            show4: false,
        };
    }

    handleClose1() {
        this.setState({ show1: false });
    }

    handleShow1() {
        this.setState({ show1: true });
    }

    handleClose2() {
        this.setState({ show2: false });
    }

    handleShow2() {
        this.setState({ show2: true });
    }

    handleClose3() {
        this.setState({ show3: false });
    }

    handleShow3() {
        this.setState({ show3: true });
    }

    handleClose4() {
        this.setState({ show4: false });
    }

    handleShow4() {
        this.setState({ show4: true });
    }



    render() {
        return (
            <div className="courses">

                <div className="coursesContainer">

                    <div className="courseBtn" variant="primary" onClick={this.handleShow1}>Software Courses</div>
                    <div className="courseBtn" variant="primary" onClick={this.handleShow2}>Hardware Courses</div>
                    <div className="courseBtn" variant="primary" onClick={this.handleShow3}>Electrical Courses</div>
                    <div className="courseBtn" variant="primary" onClick={this.handleShow4}>Math Courses</div>

                </div >

                <Modal show={this.state.show1} onHide={this.handleClose1} size="lg" style={{ padding: 0 }}>
                    <Modal.Header closeButton>
                        <Modal.Title >Software Courses</Modal.Title>

                    </Modal.Header>

                    <Modal.Body>

                    </Modal.Body>

                    <Modal.Footer></Modal.Footer>

                </Modal>

                <Modal show={this.state.show2} onHide={this.handleClose2} size="lg" style={{ padding: 0 }}>
                    <Modal.Header closeButton>
                        <Modal.Title >Hardware Courses</Modal.Title>

                    </Modal.Header>

                    <Modal.Body>

                    </Modal.Body>

                    <Modal.Footer></Modal.Footer>

                </Modal>

                <Modal show={this.state.show3} onHide={this.handleClose3} size="lg" style={{ padding: 0 }}>
                    <Modal.Header closeButton>
                        <Modal.Title >Electrical Courses</Modal.Title>

                    </Modal.Header>

                    <Modal.Body>

                    </Modal.Body>

                    <Modal.Footer></Modal.Footer>

                </Modal>

                <Modal show={this.state.show4} onHide={this.handleClose4} size="lg" style={{ padding: 0 }}>
                    <Modal.Header closeButton>
                        <Modal.Title >Math Courses</Modal.Title>

                    </Modal.Header>

                    <Modal.Body>

                    </Modal.Body>

                    <Modal.Footer></Modal.Footer>

                </Modal>

            </div >
        );
    }
}

export default Courses;