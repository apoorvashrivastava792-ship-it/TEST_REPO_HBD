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
  body: `Wishing you a wonderful birthday ❤️,

Please check once if you get time.

Love from Bunny 🐰❤️, who will always be there.

────────────────────────

Before the Clock Finds You

Tonight,
I won't ask the stars for anything.

They have already given me
the privilege
of living in the same world
as you.

A few more hours...

and another year
will gently rest
upon your name.

But before tomorrow
borrows you,

allow tonight
to remain ours.

I keep wondering...

How does someone
become so beautifully unforgettable?

Is it your smile,
that arrives
before happiness itself?

Is it your voice,
soft enough
to make ordinary words
feel like home?

Is it the glow
that quietly blooms
across your face
whenever you're truly happy—

or is it simply
that every version of you
is my favourite one?

Your little habits...
the ones the world
would probably overlook—

I could spend
an entire lifetime
falling in love with them.

The way you pause.

The way you laugh.

The way you say,
"Ruko... baba...
bas paanch minute..."

How can five minutes
sound so beautiful?

How can waiting
feel like another form of love?

Sometimes I think
God was unusually patient
while creating you.

He didn't rush.

He smiled.

He took every beautiful thing
the world could offer—

a gentle heart,

a curious soul,

eyes full of stories,

kindness without noise,

and stitched them together
until they became...

you.

If I could,
I'd cook every meal
that ever made you smile.

Bring you every coffee
on sleepy mornings.

Save every cake
for your happiest evenings.

Hold every reason
that ever tried
to steal your smile...

and quietly
replace it
with another one.

Because your happiness
has somehow become
my favourite prayer.

And maybe
I'll never learn
how to love you
loudly enough.

But every poem,
every silent night,
every glance
towards the moon...

has always been
my heart
trying to pronounce
your name.

So before the world
fills tomorrow
with candles and wishes...

let me keep
this last quiet evening
for one simple truth—

If love
is made
of a thousand little things,

then I have fallen
for every single one
of yours.

Sleep peacefully tonight...

Tomorrow
the world celebrates your birthday.

Tonight...

my heart
celebrates you.`,
};

async function sendEmail() {
  try {
    await transporter.sendMail({
      from: `"Bunny 🐰❤️" <${process.env.GMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: msg.subject,
      text: msg.body,
      html: `
        <div style="font-family: Georgia, serif; line-height: 1.8; color: #333; max-width: 700px; margin: auto;">
          <h2 style="text-align:center;">${msg.subject}</h2>

          <div style="white-space: pre-wrap; font-size:16px;">
${msg.body}
          </div>

          <br>

          <div style="text-align:center;">
            <a href="${process.env.WEBSITE_URL}"
               style="background:#ff4d6d;color:white;padding:12px 24px;text-decoration:none;border-radius:8px;font-weight:bold;">
              🎁 Open Your Birthday Surprise
            </a>
          </div>

          <br>
          <p style="text-align:center;color:#888;">
            Made with ❤️ by Bunny
          </p>
        </div>
      `,
    });

    console.log("✅ Email sent successfully!");
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
}

sendEmail();
