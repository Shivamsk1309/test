import MailGen from 'mailgen';
import nodemailer from 'nodemailer';
import config from '../../config';

const { sendEmailCredentials } = config;

interface sendEmailParams {
  sendTo: string[]
  content: string
  subject: string
}

const sendEmail = async ({ content, sendTo, subject }: sendEmailParams) => {
  let config = {
    service: 'gmail',
    auth: {
      user: sendEmailCredentials.email,
      pass: sendEmailCredentials.password,
    }
  };
  const transPoter = nodemailer.createTransport(config);
  const mailGenerator = new MailGen({
    theme: 'default',
    product: {
      name: 'Swapiee',
      link: 'https://dev.swapiee.com/'
    }
  })
  const response = {
    body: {
      name: content,
    }
  }
  const mail = mailGenerator.generate(response)
  let message = {
    from: sendEmailCredentials.email,
    to: sendTo,
    subject,
    html: mail,
  }
  const data = await transPoter.sendMail(message);
  if (data.rejected.length) {
    throw {
      message: 'Email not sent'
    }
  }
}

export {
  sendEmail,
};
