/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // chave segura com 16 caracteres 
    secret: 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3',
    env: {
      "MYSQL_USER": "root",
        "MYSQL_PASSWORD": "root",
        "MYSQL_DATABASE": "db_fullstack",
        "MYSQL_HOST": "localhost",
        "MYSQL_PORT": "3307",
    },
    mail: {
      host: "smtp.gmail.com",
      port: 587,
      username: "pblucasromero@gmail.com",
      password: "595959salvesaopaulo"
    }
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
}

module.exports = nextConfig