import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

const MAIL = {
  host: serverRuntimeConfig.mail.host,
  port: serverRuntimeConfig.mail.port,
}

const PROTOCOL = {
  secure: false,
  requireTLS: false,
  tls: {
    rejectUnauthorized: true
  }
}

const AUTHORIZATION = {
  user: serverRuntimeConfig.mail.username,
  pass: serverRuntimeConfig.mail.password
}

export { MAIL, PROTOCOL, AUTHORIZATION }