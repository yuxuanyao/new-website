import '../css/banner.css';
import React from 'react';


class Banner extends React.Component {

    state = {
        opacity: 0.65,
        lastScrollY: 0,  // Keep track of current position in state
    };



    componentDidMount() {
        // When this component mounts, begin listening for scroll changes
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { lastScrollY } = this.state;
        const currentScrollY = window.scrollY;


        if (currentScrollY > lastScrollY) {
            if (this.state.opacity >= 0.95) {
                this.setState({ opacity: 0.95 });
            } else {
                this.setState({ opacity: this.state.opacity + 0.01 });
            }
        }
        else {
            if (this.state.opacity <= 0.65) {
                this.setState({ opacity: 0.65 });
            } else {
                this.setState({ opacity: this.state.opacity - 0.02 });
            }
        }
        this.setState({ lastScrollY: currentScrollY });
    };


    render() {
        return (
            <div className="bannerOverlay" style={{
                transition: 'background-color 0.1s linear',
                backgroundColor: `rgba(0, 0, 0, ${this.state.opacity})`,
            }
            }>
                <h1 className="bannerNameHello">Hello! I'm </h1>
                <h1 className="bannerName">Yuxuan Yao</h1>
            </div >
        );
    }
}

export default Banner;