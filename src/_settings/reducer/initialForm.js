const initialForm = {
    progress: 0,
    name: '',
    phone: '',
    medical: '',
    manualGeolocation: '',
    payment: null,
    complementary: null,
    urlCode: null,
    city: null,
    coordinates: [],
    availableMedical: null
}

const settingsForm = {
    supportGeolocation: true,
    searchMedical: false,
    allowGeolocation: true
}

export { initialForm, settingsForm }