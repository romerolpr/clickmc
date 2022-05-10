import { AUTHORIZATION, MAIL, PROTOCOL } from "./config"
import { toast } from 'react-toastify';
import nodemailer from 'nodemailer'
import { MAIL_NOT_SENT } from "./response";

const credentials = {
  ...MAIL,
  ...PROTOCOL,
  auth: {
    ...AUTHORIZATION  
  }
}

const mailSend = async (to, content) => {
  
  const transporter = nodemailer.createTransport(credentials)

  const contacts = {
    from: AUTHORIZATION.user,
    to
  }
  
  const email = Object.assign({}, content, contacts)
  
  await transporter.sendMail(email, (error, info) => {
    if (error) {
      console.log(error)
    }
    console.log(info)
  })

}

export default mailSend