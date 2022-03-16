import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Loading } from '../../../components';

import styles from '../../../_assets/css/modules/searchMedical.module.css';

import { _positionByMedical } from "./store"; 
import { ScheduleMedical } from "./ScheduleMedical";

import ContentLoader from "react-content-loader";

import { Button } from 'react-bootstrap';

import { useFetch } from "../../fetch/useFetch";

import { image } from "../../../constants";

import { Img } from 'react-image';

const SearchMedical = ({ category }) => {

    const formValues = useSelector( (state) => state.formValues);
    const { coordinates } = formValues

    const { data: categories } = useFetch(`usuario/categoria/${category}`)

    const { items } = _positionByMedical(categories?.users, { lat: coordinates.latitude, lon: coordinates.longitude })

    const Image = ({ imageSrc, title }) => {

        const unloaded = '/images/avatar/image_uvailable.png'

        return <Img src={imageSrc} loader={unloaded} unloader={unloaded} title={title}/>
        
    }

    if (items == null || items.length == 0) {
        return (
            <div className={styles.selectFormMedical}>
                <div className={styles.list_medical}>
                    <div className={styles.list_li}>
                        <div className={styles.list_gridColumnControl}>
                            <div className={styles.list_optionsInfo}>
                                <div className={styles.list_columns}>
                                    <div className={styles.list_avatarIcon}>
                                        <Loading label={false}/>
                                    </div>
                                    <ContentLoader
                                        viewBox="0 5 100 20" 
                                        backgroundColor={'#dedede'}
                                        backgroundOpacity={0.35}
                                        foregroundColor={'#eee'}
                                        foregroundOpacity={0.25}
                                        >
                                        <rect x="10" y="8" rx="1" ry="1" width="45" height="5" />
                                    </ContentLoader>
                                </div>
                                <div className={styles.list_availableScheduling}>
                                    <div className={styles.optionsCarousel} style={{marginLeft: 0}}>
                                        <ScheduleMedical medicalName={null} medicalCategoryId={null}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // if () {
    //     return (
    //         <Fragment>
    //             <p>Olá {formValues.name.split(' ')[0]}, infelizmente não conseguimos localizar nenhum especialista na categoria de {category} próximo de você.</p>
    //         </Fragment>
    //     )
    // }

    return (
        <Fragment>
            {console.log(items)}
            <p>{formValues.name.split(' ')[0]}, nós encontramos estes especialistas próximos de você.</p>
            <div className={styles.selectFormMedical}>
                    
                {items.map( (item, indice) => 
                    <div key={indice} className={styles.list_medical}>
                        <div className={styles.list_li}>
                            <div className={styles.list_gridColumnControl}>
                                <div className={styles.list_optionsInfo}>
                                    <div className={styles.list_columns}>
                                        <div className={styles.list_avatarIcon}>
                                            <Image imageSrc={item.details.backdrop} title={item.details.name}/>
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
                <button
                className="btn btn-primary"
                >
                    Salvar e continuar
                </button>
            </div>
        </Fragment>
    )
}

export { SearchMedical }    