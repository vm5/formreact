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

    emailjs.send('service_nra8ibh', 'template_7zhdusk', emailData, 'vW5x6b44wyKCaQKLb')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setStep(2);
        setMessage('Your answer has reached the concerned person. Thank you for taking some time out to answer the query!');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setMessage('Failed to send your information. Please try again.');
      });
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      <div className="grid md:grid-cols-[260px_1fr] min-h-screen w-full">
        <div className="hidden md:flex flex-col side-component p-6 bg-gray-800 shadow-lg">
          <button className="flex items-center justify-start w-full gap-2 px-3 py-2 text-left hover:bg-gray-700 rounded-lg">
            <div className="flex items-center justify-center rounded-full w-9 h-9 bg-gray-700">
              <BotIcon className="w-6 h-6 text-white" />
            </div>
            <div className="text-lg font-semibold grow text-ellipsis whitespace-nowrap">nucleusFUSION</div>
          </button>
          <div className="mt-6 text-gray-400 text-sm leading-relaxed">
            <img src="/nucleus-removebg-preview.png" alt = "NUCLEUS" />
            <p>Welcome to nucleusFUSION! This form helps you connect with mentors if you require tips on cracking an interview for your preferred organization. Please enter the following details:</p>
          </div>
        </div>
        <div className="flex flex-col items-start flex-1 p-8 max-w-2xl mx-auto bg-gray-100 shadow-lg rounded-lg text-gray-900">
          {step === 1 ? (
            <form className="space-y-6 w-full" onSubmit={handleSubmit}>
              <div className="w-full">
                <label className="block text-sm font-medium">Your Full Name:</label>
                <input 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium">Your SRN:</label>
                <input 
                  name="srn" 
                  value={formData.srn} 
                  onChange={handleChange} 
                  required 
                  className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium">The organization you are interviewing for:</label>
                <input 
                  name="company" 
                  value={formData.company} 
                  onChange={handleChange} 
                  required 
                  className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium">Your Contact(s) (email, phone):</label>
                <input 
                  name="contactMethod" 
                  value={formData.contactMethod} 
                  onChange={handleChange} 
                  required 
                  className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Submit your details
              </button>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-lg">{message}</p>
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
