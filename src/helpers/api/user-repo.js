import { API } from '../../constants';
import { toast } from 'react-toastify';

const users = API.get('/usuario/acessos')

users.then( users => users)
.catch( error => {
    toast.error('Não foi possível manter uma conexão com o banco de dados') })

export const usersRepo = {
    getAll: () => users,
    findBy: x => users.find(x),
}