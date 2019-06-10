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
                        <div className="courseTitle">APS105 - Computer Fundamentals</div>
                        <p className="courseDescription">This course is the first taste of programming in C. It overs the basics of computer software and introduces concepts of programming algorithms, style, grammar, and debugging. This course sets students up for upper year programming courses, particularly in ECE, and can be challenging with a steep learning curve for those who don’t have programming experience.</p>

                        <div className="courseTitle">ECE244 - Programming Fundamentals</div>
                        <p className="courseDescription">This second year programming course looks at Object Oriented Programming using C++. Some new concepts covered are compilation, classes and objects, inheritance, graphs, and complexity algorithms. These concepts are fairly important to understand as they are fundamental in many modern programming languages and will be used in ECE297! Lectures can be boring if you are a more experienced programmer but still attend as they teach many concepts. Exams involve writing lots of small programs so it’s important to know the material and come up with solutions quickly.</p>

                        <div className="courseTitle">ECE297 - Communication and Design</div>
                        <p className="courseDescription">ECE297 is a 2nd year design project in C++ where you will be working in teams of 3 to develop an application, typically a GIS (“Google Maps Project”), basically from scratch. This course combines communication skills with programming knowledge where 50% of your mark will come from written assignments and presentations, hence cannot be neglected! This course can take up A LOT of time in second semester so it also requires very good time management, especially to maintain grades in other courses. Make sure your team is composed of good programmers, good presenters, good writers, and, most importantly, good people.</p>
                    </Modal.Body>

                    <Modal.Footer></Modal.Footer>

                </Modal>

                <Modal show={this.state.show2} onHide={this.handleClose2} size="lg" style={{ padding: 0 }}>
                    <Modal.Header closeButton>
                        <Modal.Title >Hardware Courses</Modal.Title>

                    </Modal.Header>

                    <Modal.Body>
                        <div className="courseTitle">ECE241 - Digital Systems</div>
                        <p className="courseDescription">ECE241 is an introduction to digital computing and logic. By the end of the course, you'll have a basic understanding of how all digital devices work. You will learn the basics of Verilog language and program an FPGA board for various applications like switches, multiplexers, and number counters. There is also a multiple-week partner project where you get to design an application of your choosing.</p>

                        <div className="courseTitle">ECE243 - Computer Organization</div>
                        <p className="courseDescription">This is course can be considered a continuation of ECE241 and is split into two parts: learning Assembly language and computer architecture. You will learn how processors are made and run and will have the skills to create your own processor, and even play around with one in the labs. The weekly labs are written in Assembly, a very low-level language, and are implemented on FPGA. Labs are shorter and a bit more fun than in the first semester with programming control for a car on a track. There is also a 3-week project of your choosing with LEGO kits available.</p>

                    </Modal.Body>

                    <Modal.Footer></Modal.Footer>

                </Modal>

                <Modal show={this.state.show3} onHide={this.handleClose3} size="lg" style={{ padding: 0 }}>
                    <Modal.Header closeButton>
                        <Modal.Title >Electrical Courses</Modal.Title>

                    </Modal.Header>

                    <Modal.Body>

                        <div className="courseTitle">ECE110 - Electrical Fundamentals</div>
                        <p className="courseDescription">ECE110 is the first course that introduces you to the electrical side of ECE. It's split into two halves: the first covers electromagnetic fields, and the second covers electrical circuits. Because of the breadth of the material covered and the wide range of challenging questions they can ask, it's generally considered one of more challenging courses in first year.</p>

                        <div className="courseTitle">ECE212 - Circuit Analysis</div>
                        <p className="courseDescription">The second course in the circuits trilogy, ECE212 is one of the easier 2nd year courses. The first half is roughly a review of ECE110, but then picks with conceptually harder material which requires you to keep up. This course prepares you to be able to solve most types of circuits. Grasping the concepts and being able to solve problems methodically is essential to doing well in this course, as the homework questions can be long and doing them fast will help on the exam as well. Labs are not very difficult allowing you to get good marks for the practical work if you prepare and do the work.</p>

                        <div className="courseTitle">ECE231 - Introductory Electronics</div>
                        <p className="courseDescription">Introductory electronics is the third course in the sequence of ECE110, ECE212 and ECE231. It provides a foundation to circuit analysis and electronics. The course dives into operational amplifiers, diodes and transistors. These are the building blocks for large circuits and future electronic courses at the higher level. This course is on the harder side because it’s fairly fast paced and there’s a lot of content to cover so it’s very important to avoid falling behind.</p>

                        <div className="courseTitle">ECE221 - Electric and Magnetic Fields</div>
                        <p className="courseDescription">This physics focussed course builds on the first half of ECE110 with more complex geometry taught in MAT291. The fundamentals of electrostatics, magnetostatics, and electromagnetics are covered. There are many equations derived and used so it’s important to keep track of the material and understand in which situations you can apply certain equations. The material from ECE221 will show up in various Area 1 and 2 courses. If you like this course, you can take ECE320 which builds up on it and uses the same textbook.</p>

                    </Modal.Body>

                    <Modal.Footer></Modal.Footer>

                </Modal>

                <Modal show={this.state.show4} onHide={this.handleClose4} size="lg" style={{ padding: 0 }}>
                    <Modal.Header closeButton>
                        <Modal.Title >Math Courses</Modal.Title>

                    </Modal.Header>

                    <Modal.Body>
                        <div className="courseTitle">MAT186 - Calculus I</div>
                        <p className="courseDescription">A continuation of grade 12 calculus, this course will introduce you to limits, derivatives, and integration. Midterms cover content from class and webwork while the most of the final exam covers content from the last chapter. Understanding theory and practicing questions is key!</p>

                        <div className="courseTitle">MAT187 - Calculus II</div>
                        <p className="courseDescription">In terms of difficulty, workload, and transition from high school, Calculus II used to be similar to Calculus I, until they changed the instructor to good old Bernardo. The tests and online assignments are generally regarded as some of the hardest in first year, and is usually a big scare for first years. Topics include integration techniques, sequences and series, differential equations, and vector-valued functions.</p>

                        <div className="courseTitle">MAT188 - Linear Algebra</div>
                        <p className="courseDescription">MAT188 takes high school algebra and stretches it literally, and figuratively. In this course students will learn more about vectors, linear equations, and determinants. Students will be introduced to eigenvectors, subspaces, matrices, orthonormal bases, and diagonalization. This course also includes WebWork and weekly quizzes.</p>

                        <div className="courseTitle">MAT290 - Advanced Engineering Mathematics</div>
                        <p className="courseDescription">Advanced Engineering Mathematics teaches you the basic concepts used for future ECE courses. These concepts include complex analysis, differential equations and laplace transforms. Don’t let the name of the course scare you because it’s one of the easiest 2nd courses if you keep up with the material and do the practice problems. Tutorials have quizzes which are based on the textbook questions and the midterm or exam difficulty is also similar to the textbook problems.</p>

                        <div className="courseTitle">MAT291 - Calculus III</div>
                        <p className="courseDescription">Calculus III is the third and final calculus course you will take! (Ignoring the fact that calc concepts show up in nearly all other courses in ECE). Calculus III involves multivariable calculus and covers important concepts such as: gradient, 3D integrals, Jacobian, line integrals, Green's theorem, divergence, curl of a vector field, surface integrals, Stokes' theorem and the Divergence theorem, constrained max/min problems and the method of Lagrange multipliers. Many of these concepts build on top of each other so it’s highly recommended to keep up and attend lectures.</p>

                        <div className="courseTitle">ECE216 - Signals and Systems</div>
                        <p className="courseDescription">This course involves analysis of different waveforms and different ways to describe signals. It combines new concepts with material from MAT188 and MAT290. This is a math heavy course and critical thinking helps with understanding. You will learn Fourier Series and Fourier Transforms and how to apply them in signal analysis. Any studies in communication will require you to know what you learn in this course.</p>
                    </Modal.Body>

                    <Modal.Footer></Modal.Footer>

                </Modal>

            </div >
        );
    }
}

export default Courses;