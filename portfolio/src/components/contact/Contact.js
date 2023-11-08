import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
function Contact() {
  const [done,setDone]=useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p1wo4gl', 'template_llcl5yn', form.current, 'cog4K_o7OLZelfF8-')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
            <div className="container"  >
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
         <h1 className='contact'>Get In Touch</h1>
         <div className="blur2 s-blur1 " style={ { background:"var:(--purple)"}}></div>
         <h2  className='contactme'>Contact me</h2>
    </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
            <form className='form' ref={form} onSubmit={sendEmail}  >

        <input className='input' type="text" name="user_name" placeholder='Name' />
        <input className='input' type="email" name="user_email" placeholder='Email' />
        <input  className="message input" name="message" placeholder='Message' />
        <input type="submit" value="send" className="btn contact-btn" onclick="submitForm()" />
        <span className='reply'> {done && "Thanks for contact me!!"}</span>
            </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Contact