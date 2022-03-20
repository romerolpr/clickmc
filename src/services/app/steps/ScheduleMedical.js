import { useSelector, useDispatch } from "react-redux";

import { Loading } from '../../../components';

import { useState, useEffect, Fragment } from "react";

import styles from '../../../_assets/css/modules/searchMedical.module.css';
import { dateFormat } from "../../../constants/dateFormat";
import { API, compareObjects } from "../../../constants";

import {
    _setAvailableMedical, _setMedical
} from '../../../store/actions/form';

import { isAvailableSchedule } from "./store";
import { toast } from "react-toastify";
import { listMedical } from "../../../_settings/reducer/initialForm";

const ScheduleMedical = ({ medicalName, medicalCategoryId, interval }) => {

    const dispatch = useDispatch()
    const formValues = useSelector( (state) => state.formValues)

    const { availableMedical } = formValues

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
        <Fragment>
            <div className="col-4"><Loading label={false}/></div>
            <div className="col-4"><Loading label={false}/></div>
            <div className="col-4"><Loading label={false}/></div>
        </Fragment>
    )

    const toggleLoadPackage = button => {
        
        const packageTemp = {
            medical: {
                id: button.dataset.id,
                name: button.dataset.name
            },
            datetime: [button.dataset.date, button.dataset.hour].join(' ')
        }

        const { isAvailable } = isAvailableSchedule(packageTemp)

        if ( !compareObjects(availableMedical, packageTemp) ) { 
            dispatch(_setAvailableMedical(packageTemp))
            dispatch(_setMedical(button.dataset.name))
        } else if ( isAvailable.length ) {
            toast.info('Esse horário já foi agendado por outro paciente. Escolha outro.')
        } else {
            dispatch(_setAvailableMedical(null))
            dispatch(_setMedical(null))
        }

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
            className={timeState == hour+':00' && dateState == date && medicalName == availableMedical.medical.name ? `selectHour ${styles.optionsActive}` : 'selectHour' } 
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

        const listHours = listMedical.hours

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
                                        
                                        if (availableMedical != undefined) {

                                            const datetimestr = new Date(availableMedical.datetime)
                                            const timeState = datetimestr.toLocaleTimeString()
                                            const dateState = [datetimestr.getFullYear(), datetimestr.getMonth()+1, datetimestr.getDate()].join('-')
                                        
                                            return getSimpleDates(key, medicalCategoryId, medicalName, date, hour, timeState, dateState)
                                        
                                        } else {

                                            return getSimpleDates(key, medicalCategoryId, medicalName, date, hour)

                                        }

                                } else {

                                    if (availableMedical != undefined) {

                                        const datetimestr = new Date(availableMedical.datetime)
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