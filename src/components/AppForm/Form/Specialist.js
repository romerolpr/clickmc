import { useSelector, useDispatch } from "react-redux";

import { 
    SelectMedical,
    SearchMedical
} from "../../../services/app/steps";

import { 
    _setPageSubtitle,
} from '../../../store/actions/informations';

import {
    _setCategory
} from '../../../store/actions/form';

import { Fragment, useState, useEffect } from "react";

import { ContainerApp } from "../../../containers";

const Specialist = () => {

    const dispatch = useDispatch()
    const formValues = useSelector( (state) => state.formValues)

    const { category, availableMedical } = formValues
    
    const [ pageTitle, setPageTitle ] = useState(null)

    const ManageComponent = () => {
        // Se uma categoria ja foi selecionada e a localizacao existir
        if (category != null 
            && formValues.manualGeolocation != null) {
            setPageTitle(`Selecione por ${category}`)
            return (
                <Fragment>
                    <SearchMedical category={category} pageTitle={setPageTitle} />
                    <button
                    style={{
                        marginBottom: '1em'
                    }}
                    className="btn btn-primary"
                    disabled={ availableMedical == null }
                    >
                        Continuar com agendamento
                    </button>
                </Fragment>
            )
        }
        setPageTitle('Informe a categoria de especialista')
        return <SelectMedical defineCategory={handleMedicalCategory} />
    }

    const handleMedicalCategory = category => {
        dispatch( _setCategory(category) )
    }

    useEffect(() => {
        setPageTitle('Informe a categoria de especialista')
        dispatch(_setPageSubtitle('Encontre o especialista mais próximo'))
    }, [])

    return (
        <ContainerApp pageTitle={pageTitle} current={'Categoria de especialista'}>
            <ManageComponent />
        </ContainerApp>
    )
}

export { Specialist }