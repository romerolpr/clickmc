import {
    UPDATE_PROGRESS,
    SET_NAME,
    SET_URLCODE,
    SET_PAYMENT,
    SET_COMPLEMENTARY,
    SET_PHONE,
    SET_CITY,
    SET_MEDICAL,
    SET_AVAILABLE_MEDICAL,
    SET_COORDINATES,
    SET_MANUAL_GEOLOCATION,
    RESET_FORM,
    SET_SEARCH_MEDICAL,
    SET_ALLOW_GEOLOCATION,
    SET_SUPPORT_GEOLOCATION
} from '..';

const _updateProgress = (progress) => ({
    type: UPDATE_PROGRESS,
    payload: progress
});

const _setName = (name) => ({
    type: SET_NAME,
    payload: name
});

const _setUrlCode = (urlcode) => ({
    type: SET_URLCODE,
    payload: urlcode
});

const _setPayment = (payment) => ({
    type: SET_PAYMENT,
    payload: payment
});

const _setComplementary = (complementary) => ({
    type: SET_COMPLEMENTARY,
    payload: complementary
});

const _setPhone = (phone) => ({
    type: SET_PHONE,
    payload: phone
});

const _setCity = (city) => ({
    type: SET_CITY,
    payload: city
});

const _setMedical = (medical) => ({
    type: SET_MEDICAL,
    payload: medical
});

const _setAvailableMedical = (availableMedical) => ({
    type: SET_AVAILABLE_MEDICAL,
    payload: availableMedical
});

const _setCoordinates = (coordinates) => ({
    type: SET_COORDINATES,
    payload: coordinates
})
const _setManualGeolocation = (manualGeolocation) => ({
    type: SET_MANUAL_GEOLOCATION,
    payload: manualGeolocation
});

const _setSearchMedical = (searchMedical) => ({
    type: SET_SEARCH_MEDICAL,
    payload: searchMedical
});

const _setAllowGeolocation = (allowGeolocation) => ({
    type: SET_ALLOW_GEOLOCATION,
    payload: allowGeolocation
});

const _setSupportGeolocation = (suporteGeolocation) => ({
    type: SET_SUPPORT_GEOLOCATION,
    payload: suporteGeolocation
});

const _resetForm = () => ({
    type: RESET_FORM
})

export {
    _updateProgress,
    _setName,
    _setUrlCode,
    _setPayment,
    _setComplementary,
    _setPhone,
    _setCity,
    _setMedical,
    _setAvailableMedical,
    _setCoordinates,
    _setManualGeolocation,
    _setSearchMedical,
    _setAllowGeolocation,
    _setSupportGeolocation,
    _resetForm,
}