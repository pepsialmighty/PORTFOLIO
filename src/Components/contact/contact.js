import React from 'react';
import emailjs from 'emailjs-com';

import './contact.css';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'ex1__template',
        e.target,
        'user_9qoGxngNvXpPgCAR1BWU2',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    e.target.reset();
  }
  return (
    <div className='contact__container'>
      <div className='contact__title'>
        <h1>Contact Me</h1>
      </div>
      <div className='contact__wrapper'>
        <form className='contact__form' onSubmit={sendEmail}>
          <div className='input-fields'>
            <input
              type='text'
              className='input'
              placeholder='Name'
              name='name'
            />
            <input
              type='email'
              className='input'
              placeholder='Email Address'
              name='email'
            />
            <input
              type='text'
              className='input'
              placeholder='Phone Number'
              name='phone'
            />
            <input
              type='text'
              className='input'
              placeholder='Subject'
              name='subject'
            />
          </div>
          <div className='msg'>
            <textarea placeholder='Your message' name='message' />
            <input type='submit' value='Send' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
