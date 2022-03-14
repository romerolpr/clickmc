const initialForm = {
    progress: 0,
    name: null,
    phone: null,
    medical: null,
    category: null,
    manualGeolocation: null,
    payment: null,
    complementary: null,
    urlCode: null,
    city: null,
    coordinates: null,
    availableMedical: null
}

const settingsForm = {
    supportGeolocation: true,
    searchMedical: false,
    allowGeolocation: true,
    maxProgress: 4,
    distance: 15
}

export { initialForm, settingsForm }