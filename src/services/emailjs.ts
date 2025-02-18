import { ContactInfo } from '@/components/contact-form';
import emailjs from '@emailjs/browser';

export const sendEmail = async (info: ContactInfo): Promise<boolean> => {
  const templateParams = {
    name: info.name,
    email: info.email,
    message: info.message
  };

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    );
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};
