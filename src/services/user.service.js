import { BehaviorSubject } from 'rxjs';
import { fetchWrapper } from '../helpers';
import Router from 'next/router';

const bcrypt = require('bcryptjs');
const baseUrl = `/usuario/acessos`;
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));
const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3"

export const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value },
    login,
    addCard,
    getAllCards,
    decrypt,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const iv = crypto.randomBytes(16);

//Encrypting text
function encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
 }
 
 // Decrypting text
 function decrypt(hash) {

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
    return decrpyted.toString();
 }

function addCard(card) {
    const cards = localStorage.getItem('cards-in-cache') === null ? [] : JSON.parse(localStorage.getItem('cards-in-cache')) 
    card = encrypt(JSON.stringify(card))
    cards.push(card)
    localStorage.setItem('cards-in-cache', JSON.stringify(cards))
}

function getAllCards() {
    const cards = localStorage.getItem('cards-in-cache') === null ? [] : JSON.parse(localStorage.getItem('cards-in-cache')) 
    return cards
}

function login(username, password) {
    return fetchWrapper.get(`/usuario/acessos`, { username, password })
    .then( users => {

        const user = users.find( u => u.username === username )

        if (!(user && bcrypt.compareSync(password, user.hash))) {
            throw 'Nome de usuário ou senha inválido ou inexistente.'
        }

        const User = {
            id: user.id,
            email: user.email,
            username: user.username,
            hash: user.hash
        }
       
        userSubject.next( User )
        localStorage.setItem('user', JSON.stringify( User ))

        return user

    })
}

function logout(router = null) {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    userSubject.next(null);
    if (router != null) {
        Router.push(router);
    }
}

function register(user, method = 0) {
    user['nvl_access'] = method
    return fetchWrapper.post(`${baseUrl}/register`, user);
}

function getAll(url) {
    return fetchWrapper.get(url == undefined ? baseUrl : url);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

function update(id, params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params)
        .then(x => {
            // update stored user if the logged in user updated their own record
            if (id === userSubject.value.id) {
                // update local storage
                const user = { ...userSubject.value, ...params };
                localStorage.setItem('user', JSON.stringify(user));

                // publish updated user to subscribers
                userSubject.next(user);
            }
            return x;
        });
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}
