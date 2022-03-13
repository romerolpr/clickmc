const initialForm = {
    progress: 0,
    name: null,
    phone: null,
    medical: null,
    manualGeolocation: null,
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
    allowGeolocation: true,
    maxProgress: 4
}

export { initialForm, settingsForm }