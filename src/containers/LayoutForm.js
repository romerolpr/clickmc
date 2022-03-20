import modal from '/src/_assets/css/modules/appModal.module.css';
import { ListProgress } from '../components/AppForm';

const LayoutForm = ( { children } ) => {

    return (
        <div className={modal.window_row}>
            <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${modal.padding}`}>
                <ListProgress />
            </div>
            <div className={`col-xs-12 col-sm-12 col-md-8 col-lg-8 ${modal.padding}`}>
                { children }
            </div>
        </div>
    )

}

export { LayoutForm }