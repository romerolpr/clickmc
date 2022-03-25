import { API } from '../../constants';
import { toast } from 'react-toastify';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

const jwt = require('jsonwebtoken');
const data = { 
    time: Date() 
}

const token = jwt.sign(data, serverRuntimeConfig.secret,)

const config = {
    headers: { Authorization: `Bearer ${token}` }
}

const users = API.get('/auth/access', config)

users.then( users => users)
.catch( error => {
    toast.error('Não foi possível manter uma conexão com o banco de dados') })

export const usersRepo = {
    getAll: () => users,
    findBy: x => users.find(x),
}