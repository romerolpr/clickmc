import styles from '/src/_assets/css/modules/accompany.module.css';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getByStatus } from '../../constants';
import { Loading } from '../View/Loading';

const Informations = ({ item }) => {

    const router = useRouter()

    const [ name, setName ] = useState(null)
    const [ backdrop, setBackdrop ] = useState(null)
    const [ categId, setCategId ] = useState(null)
    const [ appointment, setAppointment ] = useState(null)
    const [ status, setStatus ] = useState(null)
    
    // pages controller
    const [ viewChat, setViewChat ] = useState(true)
    const [ viewAttachment, setViewAttachment ] = useState(false)

    const clickChat = () => {
      setViewChat(true)
      setViewAttachment(false)
    }

    const clickAttachment = () => {
      setViewChat(false)
      setViewAttachment(true)
    }

    useEffect(() => {

      const extract = item?.schedules[0]

      setName(extract?.medicalDetails.name)
      setBackdrop(extract?.medicalDetails.backdrop)
      setCategId(extract?.medicalDetails.categoryId)
      setStatus(extract?.status)
      if (extract?.appointment != undefined) {
        setAppointment(JSON.parse(extract?.appointment))
      }
      
    }, [])

    if (name == undefined) {
      return (
          <div className={styles.container_scheduling}>
              <div className={styles.top_scheduling}>
                <h2>Carregando informações...</h2>
                <p>Estamos realizando uma validação dos dados.</p>
              </div>
              <div className={styles.body_scheduling}>
                <Loading label={false}/> 
              </div>
          </div>
      )
    }

    return (
        <div className={styles.container_scheduling}>
            <div className={styles.top_scheduling}>
              <h2>{`Dr. ${name}`}</h2>
              <p>{ getByStatus(status).text }</p>
            </div>
            <div className={styles.body_scheduling}>
              <Loading label={false}/>
            </div>
        </div>
    )
}

export { Informations }