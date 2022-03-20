import { toast } from 'react-toastify';
import { API } from '../../src/constants';

// método GET
function get(url) {
    return API.get(url).then(handleResponse)
}

// método POST para inserir na tabela
function post(url, body) {
    return handleResponse( API.post(url, body) )
}

// método para realizar update na tabela
function patch(url, body) {
    return handleResponse( API.patch(url, body) )
}

function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const user = userService.userValue;
    const isLoggedIn = user && user.token;
    const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${user.token}` };
    } else {
        return {};
    }
}


// realiza o tratamento das respostas das requisições
function handleResponse(response) {

    const data = response.data;

    if (!response?.status) {
        const error = (response && response.message);

        return Promise.reject(error);
    }

    return data

}

export const fetchWrapper = {
    get,
    post,
    patch
}