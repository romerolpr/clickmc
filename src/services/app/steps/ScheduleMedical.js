import { useSelector, useDispatch } from "react-redux";

import ContentLoader from "react-content-loader";

import { useState, useEffect } from "react";

import styles from '../../../_assets/css/modules/searchMedical.module.css';
import { dateFormat } from "../../../constants/dateFormat";
import { API } from "../../../constants";

import {
    _setAvailableMedical
} from '../../../store/actions/form';

const ScheduleMedical = ({ medicalName, medicalCategoryId, interval }) => {

    const dispatch = useDispatch()
    const formValues = useSelector( (state) => state.formValues)

    const [ isLoading, setLoading ] = useState(true)
    const [ content, setContent ] = useState(undefined)

    const fetchApi = () => {

        setLoading(true)
        API
        .get(`disponibilidade/id/${medicalCategoryId}`)
        .then((response) => {
    
            if (response.status == 200) {
                setContent(response.data)
            }

            setTimeout(() => setLoading(false), 1000)    
            
        })
        .catch(() => {
            setLoading(false)
        })

    }

    const LoaderPackages = () => (
        <ContentLoader
            viewBox="0 5 120 30" 
            backgroundColor={'#dedede'}
            backgroundOpacity={0.35}
            foregroundColor={'#eee'}
            foregroundOpacity={0.25}
            >
                <rect x="10" y="8" rx="1" ry="1" width="45" height="3" />
                <rect x="57" y="8" rx="1" ry="1" width="10" height="3" />
                <rect x="10" y="13" rx="1" ry="1" width="40" height="25" />
                <rect x="52" y="13" rx="1" ry="1" width="40" height="25" />
                <rect x="94" y="13" rx="1" ry="1" width="40" height="25" />
        </ContentLoader>
    )

    const toggleLoadPackage = button => {
        const packageTemp = {
            medical: {
                id: button.dataset.id,
                name: button.dataset.name
            },
            datetime: [button.dataset.date, button.dataset.hour].join(' ')
        }
        dispatch(_setAvailableMedical(packageTemp))
        button.classList.add(styles.selectedHour)
    }

    const getCurrentDate = (timestamp, interator) => {
        let dates = [];

        const data = new Date(timestamp)
        const current = {
            year: data.getFullYear(), 
            month: data.getMonth(),
            date: data.getDate()
        }
        
        for (let i = 0; i <= interator; i++) {
            data.setFullYear( current.year )
            data.setMonth( current.month )
            data.setDate( current.date + i )
            dates.push([data.getFullYear(), data.getMonth()+1, data.getDate()].join('-'))
        }

        return {
            string: dates,
            object: data
        }

    }

    const getSimpleDates = (key, medicalCategoryId, medicalName, date, hour, timeState, dateState) => {

        if (timeState != undefined && dateState != undefined)
            return <span 
            key={key} 
            onClick={(e) => toggleLoadPackage(e.target)}
            className={timeState == hour+':00' && dateState == date && medicalName == formValues.availableMedical.medical.name ? `selectHour ${styles.optionsActive}` : 'selectHour' } 
            data-id={medicalCategoryId}
            data-name={medicalName}
            data-date={date}
            data-hour={hour}
            >{hour}</span>

        return <span 
            key={key} 
            onClick={(e) => toggleLoadPackage(e.target)}
            className="selectHour" 
            data-id={medicalCategoryId}
            data-name={medicalName}
            data-date={date}
            data-hour={hour}>{hour}</span>
    }

    const SelectDate = ({date, hours}) => {

        const listHours = [
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

        listHours.sort()
        
        const arr = listHours.filter((item) => {
            
            const current = new Date()
            
            // verifica disponibilidade de horarios a partir da data e hora
            if ( date == [current.getFullYear(), current.getMonth()+1, current.getDate()].join('-') ) {
                return !hours.includes(item) && item >= [current.getHours(), current.getMinutes()].join(':')
            }
            return !hours.includes(item)

        })
        
        return (

            <div className={styles.list_options}>
                <span className={styles.noBorder}>{dateFormat(date)}</span>
                <div className={styles.availableScheduling_list}>
                    <div className={styles.availableScheduling_list}>

                        <div className={styles.hours}>

                            {arr.length > 0 ? arr.map( (hour, key) => {

                                function fixMinutes(min) {
                                    if (min == '0') {
                                        min+='0'
                                    }
                                    return min;
                                }
                                
                                const defineCurrent = new Date()
                                const defineDate = new Date(date)
                                
                                defineCurrent.setDate(defineCurrent.getDate())
                                defineDate.setDate(defineDate.getDate()+1)

                                const formatDate = defineDate.toDateString().replace('/', '-')

                                const free = {
                                    compare: [new Date([formatDate, hour].join(' ')).getHours(), fixMinutes(new Date([formatDate, hour].join(' ')).getMinutes())].join(''),
                                    timestamp: new Date([formatDate, hour].join(' ')).getTime()
                                }

                                const now = {
                                    compare: [defineCurrent.getHours(), fixMinutes(defineCurrent.getMinutes())].join(''),
                                    timestamp: defineCurrent.getTime()
                                }
                                
                                if (defineDate.toLocaleDateString() == defineCurrent.toLocaleDateString()) {
                                    
                                    if (free.compare >= now.compare)
                                        
                                        if (formValues.availableMedical != undefined) {

                                            const datetimestr = new Date(formValues.availableMedical.datetime)
                                            const timeState = datetimestr.toLocaleTimeString()
                                            const dateState = [datetimestr.getFullYear(), datetimestr.getMonth()+1, datetimestr.getDate()].join('-')
                                        
                                            return getSimpleDates(key, medicalCategoryId, medicalName, date, hour, timeState, dateState)
                                        
                                        } else {

                                            return getSimpleDates(key, medicalCategoryId, medicalName, date, hour)

                                        }

                                } else {

                                    if (formValues.availableMedical != undefined) {

                                        const datetimestr = new Date(formValues.availableMedical.datetime)
                                        const timeState = datetimestr.toLocaleTimeString()
                                        const dateState = [datetimestr.getFullYear(), datetimestr.getMonth()+1, datetimestr.getDate()].join('-')

                                        return getSimpleDates(key, medicalCategoryId, medicalName, date, hour, timeState, dateState)
                                    
                                    } else {

                                        return getSimpleDates(key, medicalCategoryId, medicalName, date, hour)

                                    }
                    
                                }
                            
                            }) : ( <span className={styles.notHourAvailable}>Sem horário</span> )}

                        </div>

                    </div>
                </div>
            </div>

        )
        
    }

    useEffect(() => {
        
        fetchApi()

        return () => {
            
            setContent(undefined)
        }

    }, [])

    if (isLoading) {
        return <LoaderPackages />
    }

    function adjustDateString (date) {

        function increment(str) {
            return str < 10 ? `0${str}` : str
        }

        const d = date.split('-')

        const year = d[0]
        const month = increment(d[1])
        const day = increment(d[2])

        date = [year, month, day].join('-')

        return date
        
    }

    function IsJsonString(str) {
        try {
            return JSON.parse(str)
        } catch (e) {
            console.error(e)
            return str
        }
    }

    const Days = getCurrentDate(new Date(), interval == undefined ? 5 : interval)
    
    return (
        Days.string.map((Day) => {
            
            if (content != undefined) {

                const hoursList = content.item.map(item => item.appointment).filter( item => {
                    item = IsJsonString(item)
                    return item.date == adjustDateString(Day) || item.date == Day 
                }).map(item => {
                    item = IsJsonString(item)
                    return item.time
                })

                return <SelectDate date={Day} hours={hoursList}/>

            }

            return <SelectDate date={Day} hours={[]}/>

        })
    )

}

export { ScheduleMedical }