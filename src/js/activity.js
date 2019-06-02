import '../css/activity.css';
import '../css/modal.css';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

import frosh from '../images/extracurriculars/frosh.jpg'





class Activity extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.renderCarousel = this.renderCarousel.bind(this);
        // this.renderCarouselItems = this.renderCarouselItems.bind(this);

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

    renderCarousel() {
        if (this.props.carouselImg.length == 3) {
            return (
                <Carousel className="carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={this.props.carouselImg[0]}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={this.props.carouselImg[1]}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={this.props.carouselImg[2]}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            );
        } else if (this.props.carouselImg.length == 2) {
            return (
                <Carousel className="carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={this.props.carouselImg[0]}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={this.props.carouselImg[1]}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            )
        } else {
            return (
                <Carousel className="carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={this.props.carouselImg[0]}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            )
        }

    }








    render() {

        return (
            <div className="activity" >

                <div className="activityBlock" variant="primary" onClick={this.handleShow} style={{ backgroundImage: `url(${this.props.bg})` }}>
                    <div className="activityTitle">{this.props.title}</div>

                </div>

                <div class="activityOverlay"></div>



                <Modal show={this.state.show} onHide={this.handleClose} size="lg" style={{ padding: 0 }}>
                    <Modal.Header closeButton>
                        <Modal.Title >{this.props.title}</Modal.Title>

                    </Modal.Header>

                    <Modal.Body>
                        <div className="projectTitle">{this.props.project}</div>


                        {this.renderCarousel()}



                    </Modal.Body>

                    <Modal.Footer></Modal.Footer>

                </Modal>
            </div>

        );

    }

}

export default Activity;