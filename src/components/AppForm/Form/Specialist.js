import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { SelectMedical } from "../../../services/app/steps";
import { Fragment, useState } from "react";

import container from '../../../_assets/css/modules/appBreadcrumb.module.css';

import Link from "next/link";

const Specialist = () => {

    const dispatch = useDispatch()
    const formValues = useSelector( (state) => state.formValues)
    const [ medicalCategory, setMedicalCategory ] = useState(null)

    const Chart = () => {
        if (formValues.medical == null) {
            return <SelectMedical defineCategory={setMedicalCategory} />
        }
    }

    const Container = ({ children }) => (
        <Fragment>
            <div className={container.breadcrumb}>
                <nav>
                    <ol className="breadcrumb">
                        <li className={`breadcrumb-item ${container.link}`}>
                            Library
                        </li>
                        <li className="breadcrumb-item active">
                            Categoria de especialista
                        </li>
                        {/* <li className="breadcrumb-item active">Data</li> */}
                    </ol>
                </nav>
                <h2>Informe a categoria de especialista</h2>
            </div>
            { children }
        </Fragment>
    )

    return (
        <Container>
            <SelectMedical />
        </Container>
    )
}

export { Specialist }