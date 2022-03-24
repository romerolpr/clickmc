import { Fragment, useState } from "react";
import { useSelector } from "react-redux";

import styles from '../../../_assets/css/modules/searchMedical.module.css';

import { _positionByMedical } from "./store"; 
import { ScheduleMedical } from "./ScheduleMedical";

import ContentLoader from "react-content-loader";

import { useFetch } from "../../fetch/useFetch";
import { randomNumber } from "../../../constants";

import { Image } from '../../../components';

const SearchMedical = ({ category }) => {

    const formValues = useSelector( (state) => state.formValues);
    const { coordinates, name } = formValues

    name = name.split(' ')[0]

    const { data: categories } = useFetch(`usuario/categoria/${category}`)

    const { items } = _positionByMedical(categories?.users, { lat: coordinates.latitude, lon: coordinates.longitude })

    

    const GettingItems = () => {
        const location = [20, 17, 26]
        const titles = [65, 67, 54]
        const number = randomNumber(0, 2)
        return (
            <ContentLoader
                viewBox="0 5 150 55" 
                backgroundColor={'#dedede'}
                backgroundOpacity={0.35}
                foregroundColor={'#eee'}
                foregroundOpacity={0.25}
                >
                    <rect x="20" y="8" rx="50" ry="50" width="20" height="20" />
                    <rect x="52" y="8" rx="1" ry="1" width={location[number]} height="5" />
                    <rect x="52" y="15" rx="1" ry="1" width={titles[number]} height="5" />
                    <rect x="10" y="32" rx="1" ry="1" width="40" height="25" />
                    <rect x="52" y="32" rx="1" ry="1" width="40" height="25" />
                    <rect x="94" y="32" rx="1" ry="1" width="40" height="25" />
            </ContentLoader>
        )
    }

    if (items == null || items.length == 0) {
        return (
            <Fragment>
                <GettingItems />
                <GettingItems />
            </Fragment>
        )
    }

    if (items === false) {
        return (
            <Fragment>
                <p>{ name }, infelizmente não conseguimos localizar nenhum especialista na categoria de {category} próximo de você.</p>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <p>{ name }, nós encontramos estes especialistas próximos de você.</p>
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
                
            </div>
        </Fragment>
    )
}

export { SearchMedical }    