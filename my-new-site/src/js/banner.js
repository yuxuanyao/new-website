import '../css/banner.css';
import React from 'react';


class Banner extends React.Component {




    render() {
        return (
            <div className="bannerOverlay">
                <h1 className="bannerNameHello">Hello! I'm </h1>
                <h1 className="bannerName">Yuxuan Yao</h1>
            </div>
        );
    }
}

export default Banner;