import { API } from '../../constants';
import { toast } from 'react-toastify';

const users = API.get('/acessos')

users.then( users => users)
.catch( error => {
    console.log(error)
    toast.error('Não foi possível manter uma conexão com o banco de dados') })

export const usersRepo = {
    getAll: () => users,
    getById: id => users.find(x => x.id.toString() === id.toString() || x.email === id.toString() || x.username.toString() === id.toString()),
    find: x => users.find(x),
    create,
    update,
    delete: _delete
};

function create (user) {
    // generate new user id
    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save user
    users.push(user);

}

function update (id, params) {
    const user = users.find(x => x.id.toString() === id.toString());

    // set date updated
    user.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(user, params);
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete (id) {
    // filter out deleted user and save
    users = users.filter(x => x.id.toString() !== id.toString());
    
}