import nodemailer from 'nodemailer'

export default async function ContactAPI(req, res) {
  const { name, email, message } = req.body

  const user = process.env.user

  const data = {
    name,
    email,
    message,
  }

  const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          background-color: #f4f4f4;
          margin: 0;
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: auto;
          background: #fff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h2 {
          color: #333;
        }
        p {
          margin: 10px 0;
        }
        strong {
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      </div>
    </body>
    </html>
  `;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  })
  

  try {
    const mail = await transporter.sendMail({
        from: user,
        to: "facundo.dominguez.dev@gmail.com",
        replyTo: data.email,
        subject: `Contact form Submission from ${name}`,
        html: htmlTemplate
    })
    console.log("Message sent: ", mail.messageId)
    res.status(200).json({ message: "success" })

  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'Could not send the email. Your message was not sent.' })
  }

  return res.status(200).json({ message: 'success' })
}
