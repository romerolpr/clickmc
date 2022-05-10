import { Fragment, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { SelectMedical } from '../../services/app/steps';

const validationSchemaMedical = Yup.object().shape({
    name: Yup.string()
        .required('Nome de usuário é obrigatório.'),
    description: Yup.string(),
    crm: Yup.string()
        .required('O crm é obrigatório'),
    price: Yup.string()
        .required('O preço das consultas é obrigatório'),
    phone: Yup.string()
        .required('Número de telefone é obrigatório.')
        .matches(/^(\+\d{2})\s(\d{2}\s*9).*(\d{8}|\d{4}-\d{4})$/, 'Informe um número de telefone válido.'),
    address: Yup.string()
        .required('Endereço é obrigatório.'),
    number: Yup.string()
        .required('O número é obrigatório.'),
    county: Yup.string()
        .required('O município é obrigatório.'),
    postalCode: Yup.string()
        .min(9, 'O código postal está inválido.')
        .matches(/^\d{5}-?\d{3}$/, 'Informe um código postal válido.')
})

const MedicalLevel = ({ 
    register, 
    errors, 
    previousValue,
    data,
    setData }) => {

    const [ category, setCategory ] = useState(null)

    useEffect(() => {
        if (category != null) {
            setData({
                ...data,
                categmedicId: category
            })
        }
    }, [category])

    return (
        <Fragment>
            <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control defaultValue={previousValue.name} {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} type="text" placeholder="Insira seu nome" />
                <div className="invalid-feedback">{errors.name?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Categoria de especialidade {previousValue.categmedicId != undefined && `(id: ${previousValue.categmedicId})`}</Form.Label>
                <SelectMedical 
                defineCategory={setCategory}
                _id={true}
                />
                <div className="invalid-feedback">{data.categmedicId == null && 'Selecione uma categoria'}</div>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>CRM</Form.Label>
                <Form.Control defaultValue={previousValue.crm} {...register('crm')} className={`form-control ${errors.crm ? 'is-invalid' : ''}`} type="text" placeholder="Insira seu crm" />
                <div className="invalid-feedback">{errors.crm?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Preço de consulta (seu)</Form.Label>
                <Form.Control defaultValue={previousValue.price} {...register('price')} className={`form-control ${errors.price ? 'is-invalid' : ''}`} type="number" placeholder="Insira seu preço de consulta" />
                <div className="invalid-feedback">{errors.price?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Dias de atendimento</Form.Label>
                <select
                className='form-control' 
                onChange={e => {
                    e.preventDefault()
                    const value = e.target.value
                    setData({
                        ...data,
                        daysCall: value
                    })
                }}>
                    <option value={0} selected={previousValue.daysCall == 0 && true}>Todos os dias</option>
                    <option value={1} selected={previousValue.daysCall == 1 && true}>Apenas dias úteis</option>
                    <option value={2} selected={previousValue.daysCall == 2 && true}>Seg à sab e feriados</option>
                    <option value={3} selected={previousValue.daysCall == 3 && true}>Dias úteis e feriados</option>
                </select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Descrição (opcional)</Form.Label>
                <Form.Control defaultValue={previousValue.description || ''} {...register('description')} className={`form-control ${errors.description ? 'is-invalid' : ''}`} type="text" placeholder="Insira sua descrição" />
                <div className="invalid-feedback">{errors.description?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Telefone</Form.Label>
                <Form.Control defaultValue={previousValue.phone} {...register('phone')} className={`form-control ${errors.phone ? 'is-invalid' : ''}`} type="text" placeholder="Insira seu número de telefone" />
                <div className="invalid-feedback">{errors.phone?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Município</Form.Label>
                <Form.Control defaultValue={previousValue.county} {...register('county')} className={`form-control ${errors.county ? 'is-invalid' : ''}`} type="text" placeholder="Insira seu município" />
                <div className="invalid-feedback">{errors.county?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Endereço</Form.Label>
                <Form.Control defaultValue={previousValue.address} {...register('address')} className={`form-control ${errors.address ? 'is-invalid' : ''}`} type="text" placeholder="Insira seu endereço" />
                <div className="invalid-feedback">{errors.phone?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Número</Form.Label>
                <Form.Control defaultValue={previousValue.number} {...register('number')} className={`form-control ${errors.number ? 'is-invalid' : ''}`} type="text" placeholder="Insira o número do endereço" />
                <div className="invalid-feedback">{errors.number?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Código postal</Form.Label>
                <Form.Control defaultValue={previousValue.postalCode} {...register('postalCode')} className={`form-control ${errors.postalCode ? 'is-invalid' : ''}`} type="text" placeholder="Insira seu código postal" />
                <div className="invalid-feedback">{errors.postalCode?.message}</div>
            </Form.Group>
        </Fragment>
    )
}

export { MedicalLevel, validationSchemaMedical }