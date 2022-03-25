import styles from '/src/_assets/css/modules/accompany.module.css';

import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import { getByStatus } from '../../constants';
import { Loading } from '../View/Loading';

import { Chat } from './';

const Informations = ({ item }) => {

    const router = useRouter()

    const [ name, setName ] = useState(null)
    const [ backdrop, setBackdrop ] = useState(null)
    const [ categId, setCategId ] = useState(null)
    const [ appointment, setAppointment ] = useState(null)
    const [ status, setStatus ] = useState(null)
    
    // pages controller
    const [ viewChat, setViewChat ] = useState(true)

    useEffect(() => {

      const extract = item?.schedules[0]

      setName(extract?.medicalDetails.name)
      setBackdrop(extract?.medicalDetails.backdrop)
      setCategId(extract?.medicalDetails.categoryId)
      setStatus(extract?.status)
      if (extract?.appointment != undefined) {
        setAppointment(extract?.appointment)
      }
      
    }, [])

    const RenderComponent = () => {
      if (viewChat) {
        return <Chat />
      }
      return <Attachment />
    }

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
            <div className={styles.body_scheduling_p}>
        
                <Messages />

            </div>
        </div>
    )
}

export { Informations }