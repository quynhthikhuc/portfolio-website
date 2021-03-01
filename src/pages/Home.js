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
                <main>
                    <div>
                        <h1>Hi, I'm Quinn</h1>
                        <p>I'm an Interactive Digital Media major at Drexel University, and an aspiring Web Developer and UI/UX Designer.</p>
                    </div>
                    <div>
                        <h2>My work</h2>
                        <div>
                            <button onClick={this.webDevClick}>Web Development</button>
    
                            <button onClick={this.uiUxClick}>UI/UX</button>
                        </div>
                        <FilterProjects webDev={this.state.webDev} uiUx={this.state.uiUx}/>
                    </div>
                </main>
            </div>
        )
    }
}

export default Home;