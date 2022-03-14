import axios from 'axios';
import { toast } from 'react-toastify';

import { omit } from '../../../../constants';
import { settingsForm } from '../../../../_settings/reducer/initialForm';

import { useFetch } from '../../../fetch/useFetch';

import { useState } from 'react';

import LatLon from '../ellipsoidal/latlon-ellipsoidal-vincenty';
import { datums } from '../ellipsoidal/latlon-ellipsoidal-datum';

const EXTERNAL = axios.create({
  baseURL: "https://nominatim.openstreetmap.org/",
  timeout: 250,
});

function _coordinatesByPosition (location, setCoordinates) {

    const joined = Object.values(
        omit(location, 'postalCode')
    )

    const data = joined.join('+').trim().replaceAll(new RegExp(/\s+?/, 'gm'), '+')

    EXTERNAL
    .get(`search.php?q=${data}&format=jsonv2&limit=1`)
    .then(result => {

        const res = result.data

        if (res.length) {
            setCoordinates( [ res[0].lat, res[0].lon ] )
        }

    })
    .catch( (error) => {
        toast.error(`External: ${error}`)
    })

}

function _positionByMedical(medical, initialPosition) {

    const { data } = useFetch(`usuario/categoria/${medical}`)

    const [ coordinates, setCoordinates ] = useState(null)

    const items = []

    if (initialPosition != undefined) {

        data?.users.map(item => {
            
            if (coordinates == null) {
                
                try {   
    
                    // _coordinatesByPosition(item.location, setCoordinates)

                    // const le = new LatLon(parseFloat(initialPosition[0]), parseFloat(initialPosition[1]))
                    // const jog = new LatLon(parseFloat(secondPosition[0]), parseFloat(secondPosition[1]))

                    const le = new LatLon(parseFloat(initialPosition[0]), parseFloat(initialPosition[1]))
                    const jog = new LatLon(parseFloat(-24.192806094871557), parseFloat(-46.81541137270462))

                    le.datum = datums.OSGB36
                    const distance = (le.distanceTo(jog) / 1000).toFixed(1)
                    
                    if (distance <= settingsForm.distance) {

                        items.push(item)
                    
                    }
                    
                } catch (err) {
                    console.error(err)
                }

            }

        })

    } else {
        toast.error('InitialPosition failure. See more about Geolocation API.')
    }

    return { items }
}

export { 
    _positionByMedical 
}