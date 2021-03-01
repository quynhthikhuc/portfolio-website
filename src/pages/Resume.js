import React from 'react';

function Resume() {
    return(
        <div>
            <main>
                <h1><b>RESUME</b></h1>
                <div>
                    <div>
                        <h2><b>EDUCATION</b></h2>
                        <ul>
                            <li>
                                <h3>Drexel University, Philadelphia, PA</h3>
                                <p>B.S. in Interactive Digital Media</p>
                                <p>Anticipated Graduation: 06/2024</p>
                            </li>
                            <li>
                                <h3>Camden County College, Blackwood, NJ</h3>
                                <p>A.A. in Computer Graphics</p>
                                <p>01/2019 - 08/2020</p>
                            </li>
                        </ul>
                    </div>
        
                    <div>
                        <h2><b>SKILLS</b></h2>
                        <ul>
                            <li>HTML, CSS (Sass), JavaScript (React.js), PHP, MySQL, C++</li>
                            <li>Git, GitHub, WordPress, Adobe Creative Cloud</li>
                        </ul>
                    </div>
        
                    <div>
                        <h2><b>WORK EXPERIENCE</b></h2>
                        <ul>
                            <li>
                                <h3>Drexel Nanomaterials Institute, Philadelphia, PA</h3>
                                <p>Undergraduate Assistant</p>
                                <p>12/2020 - Present</p>
                                <ul>
                                    <li>Redesign Drexel Nanomaterials Group website</li>
                                    <li>Maintain and update group's website using WordPress</li>
                                </ul>
                            </li>
                            <li>
                                <h3>Camden County College, Blackwood, NJ</h3>
                                <p>Tutor</p>
                                <p>09/2019 - 03/2020</p>
                                <ul>
                                    <li>Tutored Structured Programming C++ to one to three students at a time</li>
                                    <li>Assisted students with assignments</li>
                                    <li>Helped students prepare for exams</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
        
                    <div>
                        <h2><b>RELEVANT COURSEWORK</b></h2>
                        <ul>
                            <li>Structured Programming C++</li>
                            <li>Web Design I, II</li>
                            <li>Scripting for Interactive Digital Media I</li>
                            <li>Human Factors Engineering</li>
                            <li>Design Thinking in Product Design</li>
                            <li>User Interface Design I, II</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <p><a href="assets/quinn-khuc-resume.pdf" target="_blank">You can download the PDF version via this link</a></p>
                </div>
            </main>
        </div>
    )
}

export default Resume;