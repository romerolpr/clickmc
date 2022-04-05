import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import account from '/src/_assets/css/modules/myaccount.module.css';
import { Button } from 'react-bootstrap';
import { userService } from '../../services';
import { useRedux } from '../../services/fetch';
import { toast } from 'react-toastify';
import { API } from '../../constants';

const Update = ({ updateAccount, item }) => {

    const { title, key, value } = item
    const { userValues, dispatch } = useRedux()

    const validationSchema = Yup.object().shape({
        item: Yup.string().required(`O campo de ${title.toLowerCase()} é obrigatório.`)
    })

    const formOptions = { resolver: yupResolver(validationSchema) }

    const { register, handleSubmit, setError, reset, formState } = useForm(formOptions)
    const { errors, isSubmitting  } = formState

    const onSubmit = async ({ item }) => {

        if (!userValues[key] && item != null) {
            return toast.error("O objeto informado não existe no estado global.")
        }

        const _userValues = userValues

        _userValues[key] = item

        const request = Object.assign({}, _userValues)

        // console.log(userService.userValue)

        API.put(`/usuario/update/preferences`, request, {
            headers: { Authorization: `Bearer ${userService.userValue.token}` }
        })
        .then( res => {
            const { status } = res
            if ([200, 202].includes(status)) {
                toast.success(`Seu ${title.toLowerCase()} foi atualizado com sucesso`)
                // console.log(request)
            }
        })
        .catch( err => {
            console.error(err)
            toast.error("Não foi possível realizar a atualização dos dados")
        })

    }

    return (
        <div className="col-12">
            <div className="row mb-3">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <span className={account.title_box}>Alterar: {title}</span>
                    <div className={account.item}>
                        <div className={account.item_account}>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3">
                                    <Form.Label>{title}</Form.Label>
                                    <input 
                                    name={'item'}
                                    className={`form-control ${errors.item ? 'is-invalid' : ''}`}
                                    type="text"
                                    placeholder={`Informe seu novo ${title.toLowerCase()}...`}
                                    defaultValue={value}
                                    {...register('item')}
                                    />
                                    <Form.Text className="invalid-feedback">{errors.item?.message}</Form.Text>
                                </Form.Group>
                                <Form.Group className="mt-3">
                                    <button
                                    type="submit" 
                                    className="btn btn-primary"
                                    disabled={isSubmitting}
                                    onClick={handleSubmit(onSubmit)}
                                    >
                                        {isSubmitting ? 'Salvando...' : 'Salvar' }
                                    </button>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <Button
            onClick={() => updateAccount(null)} 
            variant={'primary'}><i className="bi bi-arrow-left"></i> Voltar</Button>
        </div>
    )
}

export { Update }