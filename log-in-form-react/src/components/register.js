import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTimes, faCheck, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
  
/* create register form
func to toggle between components
form validation
func to remove and add active state to buttons
func to toggle icons and opacity when form validation is met
*/
    export default function Register() {
    const [show, setShow] = useState(false);


    const handleSubmit = e => {
      alert('Form submitted');
    };

    const handleShowHide = () => {
      setShow(!show);
    };

  return (
    <React.Fragment>
        <section id='register-form'>
    <div className="Component">
        <div className="container">
          
            <form onSubmit={handleSubmit}>
            <input
                type = "email"
                className = "email"
                placeholder = "Enter Email"
              />
              <input
                type = "username"
                className = "username"
                placeholder = "Username"
              />
              <div className='password-and-icon'>
              <input
              type = {show ? "text" : "password"}
              className = "password"
              placeholder = "Password"
              />
              <i>
              { 
                show ? (
                  <FontAwesomeIcon
                    onClick={handleShowHide}
                    icon={faEye} 
                    id='show-hide'/>
                  ) : (
                    <FontAwesomeIcon 
                      onClick={handleShowHide}
                      icon={faEyeSlash} 
                      id='show-hide'/>
                  )
              }
              </i>
              </div>
              <p id='capital'>
                <FontAwesomeIcon className="fa-times" icon={faTimes} />
                <FontAwesomeIcon className="fa-check" icon={faCheck} />
                <span>Capital Letters</span>
              </p>
              <p id='char'>
                <FontAwesomeIcon className="fa-times" icon={faTimes} />
                <FontAwesomeIcon className="fa-check" icon={faCheck} />
                <span>Special Characters</span>
              </p>
              <p id='num'>
                <FontAwesomeIcon className="fa-times" icon={faTimes} />
                <FontAwesomeIcon className="fa-check" icon={faCheck} />
                <span>Use Numbers</span>
              </p>
              <p id='char8'>
                <FontAwesomeIcon className="fa-times" icon={faTimes} />
                <FontAwesomeIcon className="fa-check" icon={faCheck} />
                <span>Use 8+ Characters</span>
              </p>
              <input
              type = "submit"
              className = "submit"
              placeholder = "Submit"
              value = "submit"
              />
            </form>
        </div>
  </div>
  </section>
  </React.Fragment>
  )}
