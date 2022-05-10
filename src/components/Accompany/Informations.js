import styles from '/src/_assets/css/modules/accompany.module.css';

import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import { getByStatus } from '../../constants';

import { Image, Loading } from '../../components';

import * as Button from '../Action';

import { Chat, Attachment } from './';
import { MEDICAL_ACCOUNT_LEVEL } from '../../_settings/_auth';
import { userService } from '../../services';
import { listOptionsInformations } from '../../constants/listOptionsInformations';

const Informations = ({ item }) => {

    const router = useRouter()

    const [ name, setName ] = useState(null)
    const [ backdrop, setBackdrop ] = useState(null)
    const [ categId, setCategId ] = useState(null)
    const [ appointment, setAppointment ] = useState(null)
    const [ status, setStatus ] = useState(null)
    
    // pages controller
    const [ viewChat, setViewChat ] = useState(true)

    const { _type } = userService.userValue

    useEffect(() => {

      const extract = item?.schedules[0]

      if (extract != undefined) {
          
        const options = listOptionsInformations(extract)

        setName(options.getName())
        setBackdrop(options.getBackdrop())
        setCategId(extract?.medicalDetails.categoryId)
        setStatus(options.status)
        setAppointment(extract?.appointment)

      }
      
    }, [])

    const RenderComponent = () => {
      if (viewChat) {
        return <Chat
        categoryId={categId}
        name={name}
        status={status}
        datetime={[appointment?.date, appointment?.time].join(' ')}
        />
      }
      return <Attachment urlCode={router.query?.urlCode}/>
    }

    const RenderButtons = () => (
      <Fragment>
        <Button.FileUpload />
        { 
        MEDICAL_ACCOUNT_LEVEL == _type
        && status == 1 
        && <Button.AcceptRequest urlCode={router.query?.urlCode}/> }
      </Fragment>
    )

    const TopButtons = ({ children, loading }) => (
      <div className={styles.top_scheduling}>
        <span className={styles.top_button_to_back} onClick={() => router.push('/acompanhar', {
          query: null
        })}>
          <i className="bi bi-arrow-left-short"></i>
        </span>
        <div className={styles.top_scheduling_image}>
          { loading ? <Image loading={true}/> : <Image imageSrc={backdrop} title={name}/>}
        </div>
        <div>
          { children }
        </div>
      </div>
    )

    if (name == undefined) {
      return (
          <div className={styles.container_scheduling}>
              <TopButtons loading={true}>
                <h2>Carregando informações...</h2>
                <p>Estamos realizando uma validação dos dados.</p>
              </TopButtons>
              <div className={styles.body_scheduling}>
                <Loading label={false}/> 
              </div>
          </div>
      )
    }

    return (
        <div className={styles.container_scheduling}>
            <TopButtons>
              <h2>{name}</h2>
              <p>{getByStatus(status).text}</p>
            </TopButtons>
            <div className={styles.body_scheduling_top}>
              <div
              onClick={() => setViewChat(true)} 
              className={viewChat ? `${styles.body_button_top} ${styles.body_button_top_active}` : styles.body_button_top}>
                Detalhes da consulta</div>
              <div 
              onClick={() => setViewChat(false)}
              className={!viewChat ? `${styles.body_button_top} ${styles.body_button_top_active}` : styles.body_button_top}>
                Anexos documentos e imagens</div>
            </div>
            <div className={styles.body_scheduling_p} style={{ paddingTop: '1.5em' }}>
                <RenderComponent />
            </div>
            <div className={styles.body_scheduling_p_buttons} style={{ paddingTop: '0' }}>
              <RenderButtons />
            </div>
        </div>
    )
}

export { Informations }