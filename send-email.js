const nodemailer = require("nodemailer");
const messages = [ { subject: "Good Morning Cutoo 💜", body: `My dearest Cutoo,
54 days. That's how long I get to do this — send you a little piece of my heart every morning.
You made me expressive. You made silence feel safe.
54 days, let's make them count.
— Bunny 🐰}, { subject: "Another Morning For You 🌸", body:Good morning Cutoo 💜
Just a reminder:
You are loved. You are important. You deserve beautiful mornings.
— Bunny 🐰` } ];
function getDayIndex() { const start = new Date("2026-06-01"); const today = new Date();
const diff = Math.floor( (today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24) );
return Math.max(0, diff); }
async function sendMail() { const transporter = nodemailer.createTransport({ service: "gmail", auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD } });
const day = getDayIndex();
const msg = messages[ Math.min(day, messages.length - 1) ];
await transporter.sendMail({ from: "Bunny 🐰" <${process.env.GMAIL_USER}>, to: process.env.TO_EMAIL, subject: msg.subject, text: msg.body, html: `
${msg.subject}
  <p style="white-space:pre-line">
  ${msg.body}
  </p>
 
  <br>
 
  <a href="${process.env.WEBSITE_URL}">
  Open Your Birthday Website 💜
  </a>
</div>
`
});
console.log("Email sent successfully"); }
sendMail().catch(err=>{ console.error(err); process.exit(1); });
