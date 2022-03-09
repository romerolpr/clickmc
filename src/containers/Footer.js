import { Fragment } from 'react';
import { Container } from '.';
import { WEBSITE_OPTIONS } from '../_settings/menu/config';

import styles from '/src/_assets/css/modules/footer.module.css';

export const Footer = () => (
    <Fragment>
        <div className={`${styles.footer}`}>
            <Container>
                <span>Copyright © {new Date().getFullYear()} {WEBSITE_OPTIONS.sitename}. All Rights Reserved | Política de Privacidade | LGPD</span>
            </Container>
        </div>
    </Fragment>
)