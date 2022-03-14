import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Loading } from '../../../components';

import styles from '../../../_assets/css/modules/searchMedical.module.css';

import { _positionByMedical } from "./calculate"; 
import { ScheduleMedical } from "./ScheduleMedical";

import { Button } from 'react-bootstrap';

import { image } from "../../../constants";

const SearchMedical = ({ category }) => {

    const formValues = useSelector( (state) => state.formValues);
    const { coordinates } = formValues

    const { items } = _positionByMedical(category, [coordinates.latitude, coordinates.longitude])

    const Image = ({ src, title }) => {

        let error;
        const unloaded = '/images/avatar/image_uvailable.png'

        image(src, {
            failure: () => {
                error = unloaded;
            }
        })

        if (error) {
            return <img src={unloaded} alt={title} title={title}/>    
        }
        
        return <img src={src} alt={title} title={title}/>
        
    }

    if (items == null) {
        return <Loading label={false}/>
    }

    if (items.length == 0) {
        return (
            <Fragment>
                <p>Olá {formValues.name.split(' ')[0]}, infelizmente não conseguimos localizar nenhum especialista na categoria de {category} próximo de você.</p>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <p>Muito bom {formValues.name.split(' ')[0]}! Encontramos estes especialistas próximos de você.</p>
            <div className={styles.selectFormMedical}>
                    
                {items.map( (item, indice) => 
                    <div 
                    key={indice}
                    className={styles.list_medical}>
                        <div className={styles.list_li}>
                            <div className={styles.list_gridColumnControl}>
                                <div>
                                    <div className={styles.list_controlLabel}>
                                        {/* <DatepickerInterval maxNextDate={30} multiple={false}/> */}
                                        <span className={styles.controlLabelCircle}><span className={styles.controlLabelCircle_event}></span></span>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.list_columns}>
                                        <div className={styles.list_avatarIcon}>
                                            {/* <img src={item.details.backdrop} title={item.details.name} alt={item.details.name}/> */}
                                            <Image src={item.details.backdrop} title={item.details.name}/>
                                        </div>
                                        <div className={styles.list_infoText}>
                                            <span className={styles.list_displayBadge}>{item.distance} km de você</span>
                                            <h2 className={styles.list_infoTitle}>Dr. {item.details.name}</h2>
                                            <p><b>CRM</b> {item.details.crm} - {item.details.description}</p>
                                        </div>
                                    </div>
                                    <div className={styles.list_availableScheduling}>
                                        <div className={styles.optionsCarousel} style={{marginLeft: 0}}>
                                            <ScheduleMedical medicalName={item.details.name} medicalCategoryId={item.id}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    )
}

export { SearchMedical }    