const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

import getConfig from 'next/config';
import { apiHandler, usersRepo } from '../../../src/helpers/api';
import cookie from "cookie";

const { serverRuntimeConfig } = getConfig();

export default apiHandler({
    post: authenticate
});

async function authenticate(req, res) {

    const { username, password } = req.body

    const { data: users } = await usersRepo.getAll()
    const user = users.find(u => u.username === username)

    if (!(user && bcrypt.compareSync(password, user.hash))) {
      throw 'Nome de usuário ou senha inválido ou inexistente.'
    }

    const token = jwt.sign({ sub: user.id }, serverRuntimeConfig.secret, { expiresIn: '7d' })

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("_SESSION", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60,
        sameSite: "strict",
        path: "/"
      })
    )

    return res.status(200).json({
        id: user.id,
        username: user.username,
        token
    })

}