import nodemailer from 'nodemailer'

export default ContactAPI = async (req, res) => {
  const { name, email, message } = req.body

  const data = {
    name,
    email,
    message,
  }

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
    const mail = await transporter.sendMail({})
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'Could not send the email. Your message was not sent.' })
  }

  return res.status(200).json({ message: 'success' })
}
