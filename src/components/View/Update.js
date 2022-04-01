import account from '/src/_assets/css/modules/myaccount.module.css';
import { Button } from 'react-bootstrap';

const Update = ({ updateAccount, item }) => {

    const _item = item

    return (
        <div className="col-12">
            <div className="row mb-3">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <span className={account.title_box}>{_item.title}</span>
                    <div className={account.item}>
                        <div className={account.item_account}>
                            ...
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