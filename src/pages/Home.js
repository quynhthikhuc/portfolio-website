import React from 'react';
import FilterProjects from '../components/FilterProjects';

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            webDev: true,
            uiUx: false,
        }
        this.webDevClick = this.webDevClick.bind(this);
        this.uiUxClick = this.uiUxClick.bind(this)
    }

    webDevClick(){
        this.setState({
            webDev: true,
            uiUx: false,
        })
    }

    uiUxClick(){
        this.setState({
            webDev: false,
            uiUx: true,
        })
    }

    render(){
        return(
            <div>
                <main id="home-main">
                    <div id="introduction">
                        <h1>Hi, I'm <b id="fname">Quinn</b></h1>
                        <p>I'm an Interactive Digital Media major at Drexel University, and an aspiring <b id="intro-web-dev-highlight" className="intro-highlight">Web Developer</b> and <b id="intro-ui-ux-highlight" className="intro-highlight">UI/UX Designer.</b></p>
                    </div>
                    <div id="my-work">
                        <h2>My work</h2>
                        <div id="project-filter-button-wrapper">
                            <button onClick={this.webDevClick} style={this.state.webDev ? {fontWeight: 600} : {fontWeight: 400}}>Web Development</button>
                            <div></div>
                            <button onClick={this.uiUxClick} style={this.state.uiUx ? {fontWeight: 600} : {fontWeight: 400}}>UI/UX</button>
                        </div>
                        <FilterProjects webDev={this.state.webDev} uiUx={this.state.uiUx}/>
                    </div>
                </main>
            </div>
        )
    }
}

export default Home;