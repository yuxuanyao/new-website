import '../css/navbar.css';
import React from 'react';

class Topnav extends React.Component {
    render() {
        return (
            <div class="topnav">
                <ul>
                    <li className="navlinks"><a href="#home">Home</a></li>
                    <li className="navlinks"><a href="#news">About</a></li>
                    <li className="navlinks"><a href="#contact">Projects</a></li>
                    <li className="navlinks"><a href="#about">Contact</a></li>
                </ul>
            </div>
        );
    }
}

export default Topnav;