import { useState } from 'react';

import emailjs from 'emailjs-com';

import classes from './ContactForm.module.scss';

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
    console.log(REACT_APP_USER_ID);
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
  };
  return (
    <div className={classes.Container}>
      {responseMessage ? (
        <> {responseMessage === 'success' ? <div></div> : <p>Error</p>}</>
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
