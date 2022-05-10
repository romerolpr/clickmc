import mail from '../template/default'

const title = 'Clickmaisconsulta - Ative sua nova conta!';

const messageActivateAccount = (code) => {
  return {
    confirm: () => ({
      subtitle: title,
      html: mail.html(title, code)
    }),
    reject: () => null
  }
}

export default messageActivateAccount