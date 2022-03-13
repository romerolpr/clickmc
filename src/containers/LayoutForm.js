import modal from '/src/_assets/css/modules/appModal.module.css';
import { ListProgress } from '../components/AppForm';

const LayoutForm = ( { children } ) => {

    return (
        <div className={modal.window_row}>
            <div className={`col-4 ${modal.padding}`}>
                <ListProgress />
            </div>
            <div className={`col-8 ${modal.padding}`}>
                { children }
            </div>
        </div>
    )

}

export { LayoutForm }