import { Fragment } from 'react';
import { Container } from '.';
import { WEBSITE_OPTIONS } from '../_settings/menu/config';

import styles from '/src/_assets/css/modules/footer.module.css';

export const Footer = () => (
    <Fragment>
        <div className={`${styles.footer}`}>
            <Container>
                <span>© {new Date().getFullYear()} {WEBSITE_OPTIONS.sitename}. Todos os direitos reservados.</span>
            </Container>
        </div>
    </Fragment>
)