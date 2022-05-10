import { apiHandler } from '../../../src/helpers/api';
import { MAIL_CONFIRM, MAIL_NOT_SENT } from '../../../src/_settings/mail/response';
import messageActivateAccount from '../../../src/_settings/mail/message/activate-account';
import mailSend from '../../../src/_settings/mail/send';

export default apiHandler({
  post: send
}, false)

function send(req, res) {

  const { email, code } = req.body

  const response = {
    success: true, 
    data: { 
      message: null 
    }
  }

  const template = messageActivateAccount(code)
  if (mailSend(email, template.confirm())) {
    return res.status(200).json({ 
      ...response,
      data: {
        message: MAIL_CONFIRM
      }
    })
  }

  return res.status(500).json({ 
    ...response,
    success: false,
    data: {
      message: MAIL_NOT_SENT
    }
  })

}