const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const msg = {
  subject: "Happy Birthday 🎂",
  body: "Wishing you a wonderful birthday ❤️,please check once if u get time",
};

async function sendEmail() {
  await transporter.sendMail({
    from: `Bunny 🐰 ❤️<${process.env.GMAIL_USER}>`, // ✅ fixed
    to: process.env.TO_EMAIL,
    subject: msg.subject,
    text: msg.body,
    html: `
      <h2>${msg.subject}</h2>
      <p>${msg.body}</p>
      <a href="${process.env.WEBSITE_URL}">Click Here 🎁</a>
    `,
  });

  console.log("✅ Email sent successfully");
}

sendEmail();

