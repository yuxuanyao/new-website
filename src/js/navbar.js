import '../css/navbar.css';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import React from 'react';

class Topnav extends React.Component {

    state = {
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
                    <li className="navlinks"><Link activeClass="active" to={'bannerOverlay'} spy={true} smooth={true} duration={500} ><a className="navText">Home</a></Link></li>
                    <li className="navlinks"><Link activeClass="active" to={'about'} spy={true} smooth={true} duration={500} ><a className="navText">About</a></Link></li>
                    <li className="navlinks"><Link activeClass="active" to={'projects'} spy={true} smooth={true} duration={500} ><a className="navText">Projects</a></Link></li>
                    <li className="navlinks"><Link activeClass="active" to={'work'} spy={true} smooth={true} duration={500} ><a className="navText">Resume</a></Link></li>
                    <li className="navlinks"><Link activeClass="active" to={'contact'} spy={true} smooth={true} duration={500} ><a className="navText">Contacts</a></Link></li>
                </ul>
            </div>
        );
    }
}

export default Topnav;

