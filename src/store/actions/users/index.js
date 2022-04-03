import { 
    USER_SET_ID, 
    USER_SET_NAME,
    USER_SET_PHONE,
    USER_SET_AVATAR,
    USER_SET_POSTALCODE,
    USER_SET_EMAIL,
    USER_SET_BIRTHDAY,
    USER_SET_COUNTY,
    USER_SET_NUMBER,
    USER_SET_ADDRESS,
    USER_RESET } from "..";

// Atualiza usuário
const _setUserId = id => ({
    type: USER_SET_ID,
    payload: id
})

const _setUserName = name => ({
    type: USER_SET_NAME,
    payload: name
})

const _setUserBirthday = birthday => ({
    type: USER_SET_BIRTHDAY,
    payload: birthday
})

const _setUserCounty = county => ({
    type: USER_SET_COUNTY,
    payload: county
})

const _setUserNumber = number => ({
    type: USER_SET_NUMBER,
    payload: number
})

const _setUserEmail = email => ({
    type: USER_SET_EMAIL,
    payload: email
})

const _setUserPhone = phone => ({
    type: USER_SET_PHONE,
    payload: phone
})

const _setUserAvatar = avatar => ({
    type: USER_SET_AVATAR,
    payload: avatar
})

const _setUserPostalCode = postalCode => ({
    type: USER_SET_POSTALCODE,
    payload: postalCode
})

const _setUserAddress = address => ({
    type: USER_SET_ADDRESS,
    payload: address
})


// Resetar usuário
const _resetUser = () => ({
    type: USER_RESET
})

export {
    _setUserAvatar,
    _setUserEmail,
    _setUserId,
    _setUserName,
    _setUserPhone,
    _setUserPostalCode,
    _setUserCounty,
    _setUserNumber,
    _setUserAddress,
    _setUserBirthday,
    _resetUser
}