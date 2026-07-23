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
  body: "Wishing you a wonderful birthday ❤️. Please check once if you get time. Love from Bunny, who will always be there.",
};

async function sendEmail() {
  try {
    await transporter.sendMail({
      from: `Bunny 🐰 ❤️ <${process.env.GMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: msg.subject,
      text: msg.body,
      html: `
        <h2>${msg.subject}</h2>
        <p>${msg.body}</p>
        .WEBSITE_URL}">Click Here 🎁</a>
      `,
    });

    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
}

sendEmail();
