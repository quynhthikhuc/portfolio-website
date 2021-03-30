import React from 'react';
import emailjs from 'emailjs-com';


class Contact extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
            message: '',
            email: '',
        }
        this.handleFormSubmiton = this.handleFormSubmiton.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleFormSubmiton(e){
        e.preventDefault();
        emailjs.sendForm('gmail', 'default-template', e.target, 'user_skfVaBybyYiZPKouXN1De')
        .then((result) => {
            alert('Message successfully sent!')
        }, (error) => {
            alert('An error occured, message cannot be sent. Please try again.');
        });

        this.resetForm();
    }

    handleChange(e){
        if(e.target.id === 'name'){
            this.setState({
                name: e.target.value,
            })
        }
        else if(e.target.id === 'email'){
            this.setState({
                email: e.target.value,
            })
        }
        else{
            this.setState({
                message: e.target.value,
            })
        }
    }

    resetForm(){
        this.setState({
            name: '',
            message: '',
            email: '',
        })
    }

    render(){
        return(
            <div>
                <main id="contact-main">
                    <h1><b className="page-title">CONTACT</b></h1>
                    <div id="contact-content">
                        <div id="contact-instruction">
                            <p>You can reach out to me by using the contact form, or through any of the following social media platform:</p>
                            <ul>
                                <li><a href="https://github.com/quynhthikhuc" target="_blank" rel="noreferrer">GitHub</a></li>
                                <li><a href="https://www.instagram.com/qtk05_/" target="_blank" rel="noreferrer">Instagram</a></li>
                                <li><a href="https://www.linkedin.com/in/quinnkhuc/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                            </ul>
                        </div>
                        <form id="contact-form" onSubmit={e => this.handleFormSubmiton(e)}>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <textarea name="name" id="name" value={this.state.name} onChange={e => this.handleChange(e)} required></textarea>
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <textarea name="email" id="email" value={this.state.email} onChange={e => this.handleChange(e)} required></textarea>
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label>
                                <textarea name="message" id="message" size="100" value={this.state.message} onChange={e => this.handleChange(e)} required></textarea>
                            </div>
                            <input type="submit" value="Submit" id="submit-button"/>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}

export default Contact;