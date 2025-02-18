'use client';

import { useEffect, useState } from 'react';
import { sendEmail } from '@/services/emailjs';

export interface ContactInfo {
  name: string;
  email: string;
  message: string;
}

const testEmail = (email: string) => {
  const regexEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return email.length > 7 && !regexEmailPattern.test(email);
};

export default function ContactForm() {
  const [info, setInfo] = useState<ContactInfo>({ name: '', email: '', message: '' });
  const [err, setErr] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [fade, setFade] = useState(false);

  const updateInfo = (field: string, value: string) => {
    setInfo((info) => ({ ...info, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!info.name || !info.email || !info.message) {
      handleErrSet('All input fields are required.');
      return;
    }

    if (testEmail(info.email)) {
      handleErrSet('Please enter a valid email.');
      return;
    }

    const res = await sendEmail(info);

    if (res) {
      handleSuccessSet('Message sent successfully!');
      clearInfo();
    } else {
      handleErrSet('Failed to send message. Please try again.');
    }
  };

  const handleErrSet = (text: string) => {
    setErr(text);
    setSuccess('');
  };

  const handleSuccessSet = (text: string) => {
    setSuccess(text);
    setErr('');
    setFade(false);

    setTimeout(() => setFade(true), 2500);
  };

  const clearInfo = () => {
    setInfo({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    if (fade) {
      const timeout = setTimeout(() => setSuccess(''), 500);
      return () => clearTimeout(timeout);
    }
  }, [fade]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-xl p-8">
        <div className="flex flex-col gap-6">
          {/* Name */}
          <div className="flex flex-1 flex-col gap-2 text-left">
            <label htmlFor="name" className="text-xs">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ryne"
              className="ease focus:border-honey ring-honey outline-honey rounded-md border p-3 text-sm transition-colors duration-200"
              autoComplete="given-name"
              value={info.name}
              onChange={(e) => updateInfo('name', e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="email" className="text-xs">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="rynedev.ph@gmail.com"
              className="ease focus:border-honey ring-honey outline-honey rounded-md border p-3 text-sm transition-colors duration-200"
              autoComplete="email"
              value={info.email}
              onChange={(e) => updateInfo('email', e.target.value)}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="message" className="text-xs">
              Message
            </label>
            <textarea
              rows={6}
              id="message"
              name="message"
              placeholder="Hello! I am writing about.."
              className="focus:border-honey ring-honey outline-honey resize-none rounded-md border p-4 text-sm transition-all duration-200 ease-linear"
              value={info.message}
              onChange={(e) => updateInfo('message', e.target.value)}
            />
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 flex w-full justify-end">
          <button type="submit" className="relative text-lg">
            <div className="bg-honey absolute inset-x-0 h-full rounded-lg" />
            <div className="bg-thunder active:text-honey relative -translate-y-0 transform rounded-lg px-8 py-2 text-white transition duration-300 hover:-translate-x-2 hover:translate-y-1">
              Submit
            </div>
          </button>
        </div>

        {/* Success and Error Messages */}
        <div className="mt-8">
          {success && (
            <p
              className={`text-xs text-green-500 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
            >
              {success}
            </p>
          )}
          {err && <p className="text-xs text-red-500">{err}</p>}
        </div>
      </div>
    </form>
  );
}
