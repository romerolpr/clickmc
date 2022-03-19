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

const listMedical = {
    hours: [
        '10:00','10:30','10:45','10:55',
        '11:00','11:30','11:45','11:55',
        '12:00','12:30','12:45','12:55',
        '13:00','13:30','13:45','13:55',
        '14:00','14:30','14:45','14:55',
        '15:00','15:30','15:45','15:55',
        '16:00','16:30','16:45','16:55',
        '17:00','17:30','17:45','17:55',
        '18:00','18:30','18:45','18:55',
        '19:00','19:30','19:45','19:55',
        '21:00','21:30','21:45','21:55',
        '22:00','22:30','22:45','22:55'
    ]
}

export { initialForm, settingsForm, listMedical }