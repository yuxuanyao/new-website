import '../css/work.css';
import React from 'react';
import huawei from '../images/work/huawei.png';


class Work extends React.Component {
    render() {
        return (
            <div className="work">

                <div className="workTitle">WORK EXPERIENCE</div>

                <div className="workContainer">
                    <img className="worklogo" src={huawei}></img>

                    <h1>Huawei Technologies Canada, Research and Development for Wireless Communications</h1>
                    <h2>Artificial Intelligence Research Intern (Deep Learning Support Engineer)</h2>
                    <h3>Kanata, Ontario, Canada</h3>



                </div >

            </div >
        );
    }
}

export default Work;