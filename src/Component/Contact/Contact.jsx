import React from 'react'
import './Contact.css'
import call_img from '../../assest/call.png'
import mail_img from '../../assest/mail-icon.webp'
import location_img from '../../assest/loco.png'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2d1fc298-b48a-426e-a4f1-833b5451d821");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div id='contact' className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>i'm currently avaliable to take on new project, so feel free about anything that you want me to work on . You can contact anytime</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_img} alt="" /><p>adityakr7654@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_img} alt="" /><p>7549108359</p>

                        </div>
                        <div className="contact-detail">
                            <img src={location_img} alt="" /><p>Bhagalpur Bihar (853204)</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your Email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message"  rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact