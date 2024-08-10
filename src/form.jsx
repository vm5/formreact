import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ConnectPESChatbot() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    srn: '',
    idCard: null,
    company: '',
    contactMethod: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
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

    emailjs.send('service_4ii20a5', 'template_fpxg518', emailData, 'U0Y3d6YQ3IXTIXliH')
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
    <div className="min-h-screen w-full bg-gray-900 text-white">
      <div className="grid md:grid-cols-[260px_1fr] min-h-screen w-full">
        <div className="hidden md:flex flex-col side-component p-6 bg-gray-800 shadow-lg rounded-lg">
          <button className="flex items-center justify-start w-full gap-2 px-3 py-2 text-left hover:bg-gray-700 rounded-lg">
          <a 
  href="https://nucleusfusion.netlify.app/" 
  className="flex items-center justify-start w-full gap-2 px-3 py-2 text-left bg-white text-gray-900 hover:bg-gray-100 rounded-lg shadow-md transition-all duration-300"
>
   <div className="flex items-center justify-center rounded-full w-10 h-10 bg-gray-700">
              <BotIcon className="w-6 h-6 text-white" />
            </div>
            <div className="text-lg font-semibold grow text-ellipsis whitespace-nowrap">nucleusFUSION</div>
            </a>
          </button>
          <div className="mt-6 text-gray-400 text-sm leading-relaxed">
            <img src="/nucleus-removebg-preview.png" alt="NUCLEUS" className="rounded-lg shadow-md" />
            <p className="mt-4">Welcome to nucleusFUSION! This form helps you connect with mentors if you require additional information about your preferred organization. Please enter the following details:</p>
          </div>
        </div>
        <div className="flex flex-col items-start flex-1 p-8 max-w-2xl mx-auto bg-gray-100 shadow-lg rounded-lg text-gray-900">
          {step === 1 ? (
            <form className="space-y-6 w-full" onSubmit={handleSubmit}>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">Your Full Name:</label>
                <input 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="mt-1 p-4 w-full border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">Your SRN:</label>
                <input 
                  name="srn" 
                  value={formData.srn} 
                  onChange={handleChange} 
                  required 
                  className="mt-1 p-4 w-full border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">The organization you are interviewing for:</label>
                <input 
                  name="company" 
                  value={formData.company} 
                  onChange={handleChange} 
                  required 
                  className="mt-1 p-4 w-full border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">Your Contact(s) (email, phone):</label>
                <input 
                  name="contactMethod" 
                  value={formData.contactMethod} 
                  onChange={handleChange} 
                  required 
                  className="mt-1 p-4 w-full border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button 
                type="submit" 
                className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Submit your details
              </button>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-lg font-semibold">{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BotIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}
