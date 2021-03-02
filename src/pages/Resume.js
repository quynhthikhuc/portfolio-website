import React from 'react';

function Resume() {
    return(
        <div>
            <main id="resume-main">
                <h1><b className="page-title">RESUME</b></h1>
                <div id="resume-content">
                    <div id="education">
                        <h2><b id="education-title">EDUCATION</b></h2>
                        <ul>
                            <li className="list-items">
                                <h3>Drexel University, Philadelphia, PA</h3>
                                <p>B.S. in Interactive Digital Media</p>
                                <p>Anticipated Graduation: 06/2024</p>
                            </li>
                            <li className="list-items">
                                <h3>Camden County College, Blackwood, NJ</h3>
                                <p>A.A. in Computer Graphics</p>
                                <p>01/2019 - 08/2020</p>
                            </li>
                        </ul>
                    </div>
        
                    <div id="skills">
                        <h2><b id="skills-title">SKILLS</b></h2>
                        <ul>
                            <li>HTML, CSS (Sass)</li>
                            <li>JavaScript (React)</li>
                            <li>PHP, MySQL</li>
                            <li>C++</li>
                            <li>Git, GitHub</li>
                            <li>WordPress</li>
                            <li>Adobe Creative Cloud</li>
                        </ul>
                    </div>
        
                    <div id="work-experience">
                        <h2><b id="work-experience-title">WORK EXPERIENCE</b></h2>
                        <ul>
                            <li className="list-items">
                                <h3>Drexel Nanomaterials Institute, Philadelphia, PA</h3>
                                <p>Undergraduate Assistant</p>
                                <p>12/2020 - Present</p>
                                <ul>
                                    <li>Redesign Drexel Nanomaterials Group website</li>
                                    <li>Maintain and update group's website using WordPress</li>
                                </ul>
                            </li>
                            <li className="list-items">
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

                    <div id="projects">
                        <h2><b id="projects-title">PROJECTS</b></h2>
                        <ul>
                            <li className="list-items">
                                <h3>Photography Portfolio Website</h3>
                                <ul>
                                    <li>Build a content managing system that allows admin to log in, log out, add new articles, edit existing articles, and delete articles</li>
                                    <li>Use: HTML, CSS, JavaScript, PHP, MySQL, Git, GitHub</li>
                                </ul>
                            </li>
                            <li className="list-items">
                                <h3>Genshin Zodiac</h3>
                                <ul>
                                    <li>Created a responsive web application that let user to find out which Genshin Impact character they are based on their birthday</li>
                                    <li>Utilized HTML, CSS, JavaScript (React), Git, GitHub</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="resume-download-link">
                    <p><a href="assets/quinn-khuc-resume.pdf" target="_blank">You can download the PDF version via this link</a></p>
                </div>
            </main>
        </div>
    )
}

export default Resume;