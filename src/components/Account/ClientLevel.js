import { Fragment } from 'react';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';

const validationSchemaClient = Yup.object().shape({
    name: Yup.string()
        .required('Nome de usuário é obrigatório.'),
    description: Yup.string(),
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

const ClientLevel = ({ register, errors, previousValue }) => {

    return (
        <Fragment>
            <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control defaultValue={previousValue.name} {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} type="text" placeholder="Insira seu nome" />
                <div className="invalid-feedback">{errors.name?.message}</div>
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

export { 
    ClientLevel, validationSchemaClient }