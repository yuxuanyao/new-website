import '../css/navbar.css';
import React from 'react';

class Topnav extends React.Component {

    state = {
        auth: false,
        slide: 0,  // How much should the Navbar slide up or down
        lastScrollY: 0,  // Keep track of current position in state
    };

    componentWillMount() {
        // When this component mounts, begin listening for scroll changes
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        // If this component is unmounted, stop listening
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { lastScrollY } = this.state;
        const currentScrollY = window.scrollY;


        if (currentScrollY > lastScrollY) {
            this.setState({ slide: '-48px' });
        } else {
            this.setState({ slide: '0px' });
        }
        this.setState({ lastScrollY: currentScrollY });
    };


    render() {
        return (
            <div class="topnav" style={{
                transform: `translate(0, ${this.state.slide})`,
                transition: 'transform 0.2s linear',
            }}>
                <ul>
                    <li className="navlinks"><a href="#">Home</a></li>
                    <li className="navlinks"><a href="#">About</a></li>
                    <li className="navlinks"><a href="#">Projects</a></li>
                    <li className="navlinks"><a href="#">Skills</a></li>
                    <li className="navlinks"><a href="#">Extra-curriculars</a></li>
                    <li className="navlinks"><a href="#">Contact</a></li>
                </ul>
            </div>
        );
    }
}

export default Topnav;

