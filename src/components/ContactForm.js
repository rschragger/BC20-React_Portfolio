import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

//Validation util
import { /*checkPassword, */ validateEmail } from '../utils/helpers';

const ContactForm = () => {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate email address
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Valid Email and a username is required');

      return;
    }
    //alert(`Hello ${userName} ${email} ${message}`);

    // emailjs.sendForm('service_fw6i9q9', 'template_flc00kt', '#contactform')
    // .then(function(response) {
    //    console.log('SUCCESS!', response.status, response.text);
    // }, function(error) {
    //    console.log('FAILED...', error);
    // });
    var templateParams = {
      name: userName, email: email, message: message
    };
    emailjs.send('service_fw6i9q9', 'template_flc00kt', templateParams,'CL_6jbMFvX0wMK98W')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });


    // Clear input after submit
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="container-fluid ">
      <p>{(userName) ? (<>Hello {userName}</>) : (<><br /></>)}</p>
      <div className='row'>
        <form className="form col-12" id="contactform">

          {/* email  */}
          <div className="input-group mb-3">
            <span className="input-group-text col-md-2" id="basic-addon1">email</span>
            <input
              className="form-control"
              input type="text"
              aria-label="email"
              aria-describedby="basic-addon1"
              value={email}
              name="email"
              onChange={handleInputChange}
              // type="email"
              placeholder="email"
            />
          </div>

          {/* name  */}
          <div className="input-group mb-3">
            <span className="input-group-text  col-md-2" id="basic-addon2">name</span>
            <input
              className="form-control"
              aria-label="username"
              aria-describedby="basic-addon2"
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="username"
            />
          </div>

          {/* message  */}
          <div className="input-group mb-3">
            <span className="input-group-text col-md-2" id="basic-addon3">message</span>
            <textarea
              className="form-control"
              aria-label="message"
              aria-describedby="basic-addon3"
              rows="6"
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="write your comments here please..."
            />
          </div>

          <button
            className="btn btn-form "
            type="button"
            onClick={handleFormSubmit}
          >Send</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );


}

export default ContactForm


