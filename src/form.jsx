import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './App.css';

export default function ConnectPESChatbot() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    srn: '',
    company: '',
    contactMethod: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      name: formData.name,
      srn: formData.srn,
      company: formData.company,
      contactMethod: formData.contactMethod,
    };

    emailjs
      .send('service_4ii20a5', 'template_fpxg518', emailData, 'U0Y3d6YQ3IXTIXliH')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setStep(2);
        setMessage('Your details have been sent. We will connect you to someone shortly!');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setMessage('Failed to send your information. Please try again.');
      });
  };

  return (
    <div className="container">
      <div className="chatbox">
        <div className="sideComponent">
          <a href="/" className="nucleusLink">
            <BotIcon className="botIcon" />
            <span className="nucleusText">Heinweis</span>
          </a>
          <div className="sideContent">
            <img
              src="/logo-removebg-preview (5).png"
              alt="NUCLEUS"
              className="sideImage"
            />
            <p className="welcomeText">
              Welcome to Heinweis! This form helps you connect with mentors if you require tips on cracking an interview call of your preferred organization. Please enter the following details:
            </p>
          </div>
        </div>
        <div className="formContainer">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="form">
              <div className="formGroup">
                <label className="label">Your Full Name:</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              <div className="formGroup">
                <label className="label">Your SRN:</label>
                <input
                  name="srn"
                  value={formData.srn}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              <div className="formGroup">
                <label className="label">The organization you are interviewing for. You may elaborate on the same:</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              <div className="formGroup">
                <label className="label">Your Contact(s) (email, phone):</label>
                <input
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              <button type="submit" className="submitButton">
                Submit your details
              </button>
            </form>
          ) : (
            <div className="successMessage">
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}
