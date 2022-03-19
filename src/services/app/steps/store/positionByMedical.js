import axios from 'axios';
import { toast } from 'react-toastify';

import { omit } from '../../../../constants';
import { settingsForm } from '../../../../_settings/reducer/initialForm';

import { useState } from 'react';

import LatLon from '../ellipsoidal/latlon-ellipsoidal-vincenty';
import { datums } from '../ellipsoidal/latlon-ellipsoidal-datum';

const EXTERNAL = axios.create({
  baseURL: "https://nominatim.openstreetmap.org/",
  timeout: 5000,
});

function _positionByMedical(categories, coords) {

    const items = []

    if (categories != undefined) {

        categories.map( (item, key) => {

            const joined = Object.values(omit(item.location, 'postalCode'))
            const data = joined.join('+').trim().replaceAll(new RegExp(/\s+?/, 'gm'), '+')

                item['distance'] = 0;
                items.push(item)
        
        
            // EXTERNAL
            // .get(`search.php?q=${data}&format=jsonv2&limit=1`)
            // .then(result => {
        
            //     const res = result.data.pop()

            //     const their = {
            //         lat: res.lat, 
            //         lon: res.lon
            //     }

            //     const me = new LatLon(parseFloat(coords.lat), parseFloat(coords.lon))
            //     me.datum = datums.OSGB36

            //     const he = new LatLon(parseFloat(their.lat), parseFloat(their.lon))
            //     const distance = (me.distanceTo(he) / 1000).toFixed(1)
                
            //     if (distance <= settingsForm.distance) {
            //         items.push(item)
            //     }

            // })
            // .catch( (error) => {
            //     toast.error(`External: ${error}`)
            // })

        })

    }

    if ( items.length === 0 ) {
        return { items: false }
    }

    return { items }
    
}

export { _positionByMedical }