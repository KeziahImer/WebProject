import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'automailer242@gmail.com',
    pass: 'cdnc fosm ldbk lzgs',
  },
});

export default transporter;
