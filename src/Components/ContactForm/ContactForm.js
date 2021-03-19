import { useState } from 'react';

import emailjs from 'emailjs-com';

import classes from './ContactForm.module.scss';
import successImage from '../../Asset/Images/email-success.svg';

const ContactForm = () => {
  const {
    REACT_APP_SERVICE_ID,
    REACT_APP_TEMPLATE_ID,
    REACT_APP_USER_ID,
  } = process.env;
  //state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  //form submit
  const submitHandler = async (e) => {
    e.preventDefault();
    if ((name, email, message)) {
      try {
        await emailjs.send(
          REACT_APP_SERVICE_ID,
          REACT_APP_TEMPLATE_ID,
          { name, email, message },
          REACT_APP_USER_ID
        );
        setResponseMessage('success');
      } catch (error) {
        setResponseMessage('error');
      }
    }
  };
  return (
    <div className={classes.Container}>
      {responseMessage ? (
        <>
          {' '}
          {responseMessage === 'success' ? (
            <div className={classes.EmailSuccess}>
              <img src={successImage} alt='success' />
              <h1>Message reeived. Thanks!</h1>
              <p>I'II be in touch with you shortly.</p>
              <a href='/'>Back to home</a>
            </div>
          ) : (
            <div className={classes.EmailSuccess}>
              <i
                style={{ color: '#7b1af8' }}
                class='fas fa-exclamation-triangle fa-4x'
              ></i>
              <h1>Sorry the message could not be sent</h1>
              <p>
                Please try again or{' '}
                <a
                  style={{
                    textDecoration: 'none',
                    color: '#7b1af8',
                    fontFamily: 'sans-serif',
                    fontSize: '1em',
                  }}
                  href='mailto:manishmandalj@gmail.com'
                >
                  mail me
                </a>
              </p>
              <a href='/contact'>Try Again</a>
            </div>
          )}
        </>
      ) : (
        <>
          {' '}
          <p>
            Thanks for taking the time to reach out. <br /> How can I help you
            today?
          </p>
          <form>
            <span>
              <p>
                Name
                <input
                  name='user_name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                />
              </p>
              <p>
                Email
                <input
                  name='user_email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                />
              </p>
            </span>
            <p>
              Message
              <textarea
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                cols='30'
                rows='4'
                spellCheck='true'
              />
            </p>
          </form>
          <button onClick={(e) => submitHandler(e)} type='submit'>
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default ContactForm;
