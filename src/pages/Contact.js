import React from 'react';
import emailjs from 'emailjs-com';


class Contact extends React.Component{
    constructor(){
        super();
        this.state = {
        }
        this.handleFormSubmiton = this.handleFormSubmiton.bind(this);
    }

    handleFormSubmiton(e){
        e.preventDefault();
        emailjs.sendForm('gmail', 'default-template', e.target, 'user_skfVaBybyYiZPKouXN1De')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    render(){
        return(
            <div>
                <main>
                    <h1><b>CONTACT</b></h1>
                    <div>
                        <div>
                            <p>You can reach out to me by using the contact form, or through any of the following social media platform:</p>
                            <ul>
                                <li><a href="https://github.com/quinnkhuc" target="_blank" rel="noreferrer">GitHub</a></li>
                                <li><a href="https://www.instagram.com/qtk05_/" target="_blank" rel="noreferrer">Instagram</a></li>
                                <li><a href="https://www.linkedin.com/in/quinnkhuc/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                            </ul>
                        </div>
                        <form onSubmit={e => this.handleFormSubmiton(e)}>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="name" required/>
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="text" name="email" id="email" required/>
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label>
                                <input type="text" name="message" id="message" required/>
                            </div>
                            <input type="submit" value="Submit" id="submit-button"
                            />
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}

export default Contact;