import '../css/skills.css';
import React from 'react';



class Skills extends React.Component {
    render() {
        return (
            <div class="skills">
                <h1 className="skillsTitle">PROFICIENCY</h1>
                <div class="row">
                    <div class="column" >
                        <h2>Programming Languages</h2>
                        <p>Some text..</p>
                        <h2>Web Development Technologies</h2>
                        <p>Some text..</p>
                    </div>
                    <div class="column" >
                        <h2>Deep Learning</h2>
                        <p>Some text..</p>
                        <h2>ML Tools</h2>
                        <p>Some text..</p>
                    </div>
                    <div class="column" >
                        <h2>Miscellaneous</h2>
                        <p>Some text..</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;