import { API, dateFormat } from "../../../../constants";

const isAvailableSchedule = ( availableMedical ) => {

    const isAvailable = []

    const { datetime: _datetime } = availableMedical

    _datetime = _datetime.split(' ')
    const datetime = {
        date: _datetime[0],
        time: _datetime[1]
    }

    const _isAvailable = item => {

        const appointment = item.appointment

        return dateFormat(appointment.date) == dateFormat(datetime.date) && appointment.time == datetime.time || 
        appointment.date == datetime.date && appointment.time == datetime.time

    }

    if ( availableMedical != null ) {

        API
        .get(`disponibilidade/id/${availableMedical.medical.id}`)
        .then((response) => {
            if ( response.status == 200 && response.data?.item.filter( item => _isAvailable(item) ).length ) {
                isAvailable.push( availableMedical )
            }
        })
    
    }

    return { isAvailable }

}

export { isAvailableSchedule }