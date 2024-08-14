import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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
    <div style={styles.container}>
      <div style={styles.chatbox}>
        <div style={styles.sideComponent}>
          <a href="https://nucleusfusion.netlify.app/" style={styles.nucleusLink}>
            <BotIcon style={styles.botIcon} />
            <span style={styles.nucleusText}>nucleusFUSION</span>
          </a>
          <div style={styles.sideContent}>
            <img
              src="/nucleus-removebg-preview.png"
              alt="NUCLEUS"
              style={styles.sideImage}
            />
            <p style={styles.welcomeText}>
              Welcome to nucleusFUSION! This form helps you connect with mentors if you require additional information about your preferred organization. Please enter the following details:
            </p>
          </div>
        </div>
        <div style={styles.formContainer}>
          {step === 1 ? (
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Your Full Name:</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Your SRN:</label>
                <input
                  name="srn"
                  value={formData.srn}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>The organization you want to enquire about. Please elaborate on the details:</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Your Contact(s) (email, phone):</label>
                <input
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <button type="submit" style={styles.submitButton}>
                Submit your details
              </button>
            </form>
          ) : (
            <div style={styles.successMessage}>
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

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    color: '#2D3748',
    backgroundImage: 'url("/sky-2668711_1280.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: 'moveBackground 30s linear infinite',
  },
  chatbox: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    minHeight: '80vh',
    width: '90%',
    maxWidth: '1200px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    margin: '20px',
  },
  sideComponent: {
    background: 'linear-gradient(to right, orange, red)',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
  },
  nucleusLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px 16px',
    backgroundColor: '#ffffff',
    color: '#1a202c',
    borderRadius: '8px',
    textDecoration: 'none',
    marginBottom: '16px',
  },
  botIcon: {
    width: '20px',
    height: '40px',
    color: '#2d3748',
  },
  nucleusText: {
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
  sideContent: {
    marginTop: '20px',
    color: '#2D3748',
    fontSize: '25px',
    lineHeight: '1.6',
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'Arial, sans-serif',
  },
  sideImage: {
    borderRadius: '8px',
    width: '100%',
    maxWidth: '200px',
    marginBottom: '16px',
  },
  welcomeText: {
    margin: '0',
  },
  formContainer: {
    backgroundColor: '#F7FAFC',
    color: '#2D3748',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid #E2E8F0',
  },
  form: {
    width: '75%',
    maxWidth: '600px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #CBD5E0',
    backgroundColor: '#FFFFFF',
    boxSizing: 'border-box',
  },
  submitButton: {
    width: '40%',
    padding: '12px',
    background: 'linear-gradient(to right, orange, blue)',
    color: 'white',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  },
  successMessage: {
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: '600',
  },
};

// CSS Keyframes for the animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes moveBackground {
    0% { background-position: 0% 0%; }
    100% { background-position: 100% 100%; }
  }
`, styleSheet.cssRules.length);
