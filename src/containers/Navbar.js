import { Container } from './';
import { NavbarCollapse, NextLink } from '../components';
import { Fragment } from 'react';
import NextNprogress from 'nextjs-progressbar';

import styles from '/src/_assets/css/modules/navbar.module.css';

export const Navbar = ({ absolute }) => (
    <Fragment>
        <NextNprogress
            color="var(--bs-primary)"
            startPosition={0.3}
            stopDelayMs={200}
            height={1.25}
            showOnShallow={true}
        />
        <nav className={absolute ? `navbar navbar-expand-lg fixed-top navbar-dark ${styles.navbar_absolute}` : `navbar navbar-expand-lg navbar-dark bg-dark ${styles.navbar_relative}`}>
            <Container fluid={false}>
                <NextLink href="/" label="Click+consulta" className="navbar-brand" />
                <button className="navbar-toggler p-0 border-0" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavbarCollapse/>
            </Container>
        </nav>
    </Fragment>
)