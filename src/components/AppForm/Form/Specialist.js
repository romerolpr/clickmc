import { useSelector, useDispatch } from "react-redux";

import { 
    SelectMedical,
    SearchMedical
} from "../../../services/app/steps";

import { 
    _setPageSubtitle
} from '../../../store/actions/informations';

import { Fragment, useState, useEffect } from "react";

import container from '../../../_assets/css/modules/appBreadcrumb.module.css';

const Specialist = () => {

    const dispatch = useDispatch()
    const formValues = useSelector( (state) => state.formValues)
    
    const [ medicalCategory, setMedicalCategory ] = useState(null)
    const [ pageTitle, setPageTitle ] = useState(null)

    const ManageComponent = () => {
        // Se uma categoria ja foi selecionada e a localizacao existir
        if (medicalCategory != null 
            && formValues.manualGeolocation != null) {
            setPageTitle(`Selecione por ${medicalCategory}`)
            return <SearchMedical category={medicalCategory} pageTitle={setPageTitle} />
        }

        return <SelectMedical defineCategory={setMedicalCategory} />
    }
    
    const Container = ({ children }) => (
        <Fragment>
            <div className={container.breadcrumb}>
                <nav>
                    <ol className="breadcrumb">
                        <li className={`breadcrumb-item ${container.link}`}>
                            Categoria
                        </li>
                        <li className="breadcrumb-item active">
                            Categoria de especialista
                        </li>
                        {/* <li className="breadcrumb-item active">Data</li> */}
                    </ol>
                </nav>
                <h2>{ pageTitle }</h2>
            </div>
            { children }
        </Fragment>
    )

    useEffect(() => {
        setPageTitle('Informe a categoria de especialista')
        dispatch(_setPageSubtitle('Encontre o especialista mais próximo'))
    }, [])

    return (
        <Container>
            <ManageComponent />
        </Container>
    )
}

export { Specialist }