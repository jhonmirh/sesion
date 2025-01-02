// /src/pages/api/send-mail.ts

import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, message, name } = JSON.parse(req.body);

  // Configuración del servicio de correo
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Correo de la cuenta de Gmail
      pass: process.env.EMAIL_PASS, // Contraseña de la cuenta de Gmail o la clave de aplicación
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'proyectohenrypt21b@gmail.com',
      subject: `New message from ${name}`,
      text: message,
    });

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}

// /src/pages/api/index.js

export { default as sendMail } from './send-mail';
