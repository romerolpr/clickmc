import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import InputMask from 'react-input-mask';

import Form from 'react-bootstrap/Form';

import form from '/src/_assets/css/modules/appPayment.module.css';

import { useRedux } from '../../../services/fetch';
import { useState, Fragment } from 'react';

import { userService } from '../../../services';
import { toast } from 'react-toastify';

import { acceptedCreditCards, validateCard, validateCVV } from '../../../constants';
import axios from 'axios';

const Payment = ({ payments }) => {

    const { formValues, dispatch } = useRedux()

    const validationSchema = Yup.object().shape({
        nr: Yup.string()
            .required('Informe o número do seu cartão.')
            .test('Invalid card', 'Verifique o número do cartão e tente novamente.', // <- key, message
                function (value) {
                    for (var card in acceptedCreditCards) {
                        if (acceptedCreditCards[card].test(value.replaceAll(' ', '') )) {
                            return true
                        }
                    }
                    return false
                }
            ),
        validDate: Yup.string()
            .required('Informe a validade do seu cartão.')
            .matches(/([0-9]{2}\/[0-9]{2})/, 'Informe uma data de validade.')
            .test('Invalid date', 'Informe uma data válida.',
                function (value) {
                    if (value.split('/')[0] > 12 && value.split('/')[1] > new Date().getFullYear().toString().substr(-2)) return false
                    return true
                }
            )
            .max(5, 'A data deve conter pelo 4 dígitos.'),
        cvv: Yup.string()
            .required('Informe o código de segurança.')
            .min(3, 'O código de segunrança precisa de pelo menos 3 dígitos.')
            .test('Invalid CVV', 'Insira um código de segurança autêntico',
                function (value) {
                    return validateCVV(this.parent.nr, value)
                }
            )
            .matches(/([0-9]{3})|([0-9]{4})/, 'Informe um código de segurança válido.'),
        name: Yup.string()
            .required('Informe o nome do titular do cartão.')
    })

    const [ price, setPrice ] = useState(0)
    const [ methodPayment, setMethodPayment ] = useState(undefined)
    const [ cardParity, setCardParity ] = useState(1)

    const formOptions = { resolver: yupResolver(validationSchema) }

    const { register, handleSubmit, setError, formState } = useForm(formOptions)
    const { errors, isSubmitting  } = formState

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'USD'
    })

    const onSubmit = card => {

        const config = {
            headers: { Authorization: `Bearer ${userService.userValue.hash}` }
        }
        const body = {
            price: payments.find(opt => opt.type == 'cartao-credito').price,
            card: {
                username: userService.userValue.username,
                cvv: card.cvv,
                name: card.name,
                nr: card.nr,
                validDate: card.validDate,
                flag: validateCard(card.nr)
            }
        }

        axios.post('/api/payment', body, config)
        .then((response) => {
            if (response.data && response.data.status == 200) {
                userService.addCard(body.card)
            }
        })
        .catch(() => {
            toast.error('Não foi possível processar o pagamento')
        })
    
    }

    const confirmPayment = () => {
        
    }

    const handleSelectPayment = (type, installments, price) => {

        setPrice(price)

        setMethodPayment({ 
            type: type, // metodo pagamento
            installmentsTimes: 1,
            installmentsInterest: null
        })
    }

    const handleChangePayment = () => {
        
        setMethodPayment(undefined)
    }

    const handlePaymentGoahed = (cardDecrypt, price, installments) => {

        setMethodPayment({
            type: 'unauthorized', 
            installmentsTimes: null,
            installmentsInterest: null
        })

        userService.getAllCards().filter((card) => {

            const _this = JSON.parse(userService.decrypt(card))

            if (_this.username == userService.userValue.username && _this.nr.split(' ')[3] == cardDecrypt.nr.split(' ')[3]) {
                setMethodPayment({
                    type: 'card-authorized', 
                    installmentsTimes: cardParity, 
                    installmentsInterest: installments.interest
                })
                setPrice(price)
            }
            
        })
    
    }

    const handleSelectCardParity = (e) => {
        const value = e.target.value
        setCardParity(parseInt(value))
    }

    if (payments.length == 0) {
        return <p>Nenhum pagamento está disponível ainda.</p>
    }

    if (methodPayment != undefined) {

        const parcelamento = [...Array(payments.find(opt => opt.type == 'cartao-credito').installments.times).keys()]
        switch (methodPayment.type) {
            case 'cartao-credito':
                return (
                    <Fragment>
                        <Form onSubmit={handleSubmit(onSubmit)} className={form.appointment}>
                            <p>Preencha os dados do seu cartão:</p>
                            <Form.Group className="mb-3">
                                <label>Número do cartão</label>
                                <InputMask mask={"9999 9999 9999 9999"} name="nr" type="text" {...register('nr')} className={`form-control ${errors.nr ? 'is-invalid' : ''}`} placeholder="Digite o número do cartão..." />
                                <Form.Text className="invalid-feedback">{errors.nr?.message}</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <div className="row">
                                    <div className="col">
                                        <label>Validade</label>
                                        <InputMask mask={"99/99"} name="validDate" type="text" {...register('validDate')} className={`form-control ${errors.validDate ? 'is-invalid' : ''}`} placeholder="Digite a validade do cartão..." />
                                        <Form.Text className="invalid-feedback">{errors.validDate?.message}</Form.Text>
                                    </div>
                                    <div className="col">
                                        <label>CVV (Código de segurança)</label>
                                        <InputMask  mask={"999"} name="cvv" type="text" {...register('cvv')} className={`form-control ${errors.cvv ? 'is-invalid' : ''}`} placeholder="Digite o código de segurança do cartão..."/>
                                        <Form.Text className="invalid-feedback">{errors.cvv?.message}</Form.Text>
                                    </div>
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <label>Nome do titular</label>
                                <input name="name" type="text" {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="Digite o nome do titular do cartão..." />
                                <Form.Text className="invalid-feedback">{errors.name?.message}</Form.Text>
                            </Form.Group>
                            
                            <Form.Group className="mb-3">
                                <label>Número de parcelas</label>
                                <select name="parcelas" className="form-control" onChange={handleSelectCardParity}>
                                    {parcelamento.map((item, key) => {
                                        item += 1
                                        const value = methodPayment.installmentsInterest ? Math.floor( (methodPayment.installmentsInterest / ( 1 - ( 1 / Math.pow(1 + methodPayment.installmentsInterest,  item) ))) * price) : false
                                        return (
                                            <option value={item} selected={key == 0}>{item}x de {value ? formatter.format(value).replace('US', 'R') : formatter.format(Math.round(price/item)).replace('US','R')} {!value ? 'sem juros' : null}</option>
                                        )
                                    })}
                                </select>
                            </Form.Group>

                            {errors.apiError &&
                                <div className="alert alert-danger mt-3 mb-0">{errors.apiError?.message}</div>
                            }
                            <div className="col-md-12 d-md-inline-flex flex-row justify-content-end">
                                <button
                                style={{
                                    marginTop: '1em',
                                    
                                }}
                                className="btn btn-primary"
                                type="submit"
                                >
                                    Adicionar cartão
                                </button>
                                <button
                                style={{
                                    marginTop: '1em',
                                    marginLeft: '.3em'
                                }}
                                className="btn btn-primary"
                                onClick={handleChangePayment}
                                >
                                    Voltar
                                </button>
                            </div>
                        </Form>
                    </Fragment>
                )
            case 'pix':
                return (
                    <Fragment>
                        <p>Método de pix selecionado.</p>
                        <div className="col-md-12 d-md-inline-flex flex-row justify-content-end">
                            <button
                            style={{
                                marginTop: '1em',
                            }}
                            className="btn btn-primary"
                            onClick={handleChangePayment}
                            >
                                Voltar
                            </button>
                        </div>
                    </Fragment>
                )
            case 'boleto':
                return (
                    <Fragment>
                        <p>Método de Boleto selecionado.</p>
                        <div className="col-md-12 d-md-inline-flex flex-row justify-content-end">
                            <button
                            style={{
                                marginTop: '1em',
                            }}
                            className="btn btn-primary"
                            onClick={handleChangePayment}
                            >
                                Voltar
                            </button>
                        </div>
                    </Fragment>
                )
            case 'card-authorized':

                return (
                    <Fragment>
                        <div className="col-md-12">
                            <p>Por favor, selecione o tipo de parcelamento:</p>
                            <div className="form-group">
                                <select className="form-control" onChange={handleSelectCardParity}>
                                    {parcelamento.map((item, key) => {
                                        item += 1
                                        const value = methodPayment.installmentsInterest && item > 1 ? Math.floor( (methodPayment.installmentsInterest / ( 1 - ( 1 / Math.pow(1 + methodPayment.installmentsInterest,  item) ))) * price) : false
                                        return (
                                            <option value={item} selected={ methodPayment.installmentsTimes == key+1 }>{item}x de {value ? formatter.format(value).replace('US', 'R') : formatter.format(Math.round(price/item)).replace('US','R')} {!value ? 'sem juros' : null}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12 d-md-inline-flex flex-row justify-content-end">
                            <button
                            style={{
                                marginTop: '1em',
                            }}
                            className="btn btn-primary"
                            >
                                Confirmar e finalizar
                            </button>
                            <button
                            style={{
                                marginTop: '1em',
                                marginLeft: '.3em'
                            }}
                            className="btn btn-primary"
                            onClick={handleChangePayment}
                            >
                                Voltar
                            </button>
                        </div>
                    </Fragment>
                )
            case 'unauthorized':
            default:
                return (
                    <Fragment>
                        <p>A opção de pagamento selecionada não foi autorizada ou não pertence a sua conta.</p>
                        <div className="col-md-12 d-md-inline-flex flex-row justify-content-end">
                            <button
                            style={{
                                marginTop: '1em',
                            }}
                            className="btn btn-primary"
                            onClick={handleChangePayment}
                            >
                                Voltar
                            </button>
                        </div>
                    </Fragment>
                )
        }
        
    }

    return (
        <div className={form.list_payments}>
            {userService.userValue ? ( userService.getAllCards().length > 0 ? (
                <Fragment>
                    <div style={{float: 'left', width: '100%'}}>
                        <p style={{margin: '.25em 0'}}>Seus cartões cadastrados anteriormente</p>
            
                        {userService.getAllCards().map((card) => {
                            
                            const paymentCard = payments.find(opt => opt.type == 'cartao-credito')
                            const paymentPrice = paymentCard.discount == undefined ? paymentCard.price : paymentCard.price - ( (paymentCard.price  * paymentPrice.discount) / 100)
                            
                            const cardDecrypt = JSON.parse(userService.decrypt(card))
                            if (cardDecrypt.username == userService.userValue.username) {
                                return (
                                    <Fragment>
                                        <div className={form.options_payment} onClick={ () => handlePaymentGoahed(cardDecrypt, paymentPrice, paymentCard.installments) }>
                                            <div className={`${form.options_point} ${form.delete_card}`}></div>
                                            <p>{`${formatter.format(paymentPrice).replace('US','R')}`} {paymentCard.installments != undefined ? `até ${paymentCard.installments.times}x ${paymentCard.installments.interest ? (formatter.format( Math.floor( (paymentCard.installments.interest / ( 1 - ( 1 / Math.pow(1 + paymentCard.installments.interest,  paymentCard.installments.times) ))) * paymentPrice)).replace('US','R')) : 'sem juros'}` : null}  no Crédito pelo app</p>
                                            <p className={form.options_text_price}>{cardDecrypt.flag} **** {cardDecrypt.nr.split(' ')[3]}</p>
                                        </div>
                                    </Fragment>
                                )
                            }
                        })}
                    </div>
                </Fragment>
            ) : null ) : null}
            {payments.map((payment) => {
                const price = payment.discount == undefined ? payment.price : payment.price - ( (payment.price  * payment.discount) / 100 )
                if (!price) {
                    return (
                        <div className={form.options_payment}>
                            <div className={form.options_point}></div>
                            <p>Agora, online via <strong>{payment.method}</strong></p>
                            <p className={form.options_text_price}>GRATIS</p>
                        </div>
                    )
                }
                return (
                    <div className={form.options_payment} onClick={ () => handleSelectPayment(payment.type, ( payment.installments ? payment.installments : undefined ), payment.price ) }>
                        <div className={form.options_point}></div>
                        <p>Agora, online via <strong>{payment.method}</strong></p>
                        { payment.discount != undefined ? (
                            <p className={`${form.options_text_price} ${form.old_price}`}><span style={{textDecoration: 'line-through'}}>de {formatter.format(payment.price).replace('US','R')}</span> ({`${payment.discount}% de desconto`})</p>
                        ) : null}
                        <p className={form.options_text_price}>
                            {`${formatter.format(price).replace('US','R')}`} {payment.installments != undefined ? `ou ${payment.installments.times}x ${payment.installments.interest ? (formatter.format( Math.floor( (payment.installments.interest / ( 1 - ( 1 / Math.pow(1 + payment.installments.interest,  payment.installments.times) ))) * price)).replace('US','R')) : 'sem juros'}` : null}
                        </p>
                    </div>
                )
            })}
        </div>
    )

}

export { Payment }