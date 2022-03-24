import Head from "next/head";

import { Fragment } from "react";
import { Breadcrumb } from "../components";
import { Navbar, Container } from ".";

import { ToastContainer } from "react-toastify";
import { WEBSITE_OPTIONS } from "../_settings/menu/config";

export const LayoutStatic = ({ 
    children, 
    breadcrumbLabel, 
    breadcrumb = true, 
    navbarAbsolute = false,
    fluid = false,
    full = false
}) => (
    <Fragment>
        <Head>
            <title>{breadcrumbLabel != undefined ? `${breadcrumbLabel} - ${WEBSITE_OPTIONS.sitename}` : WEBSITE_OPTIONS.sitename}</title>
        </Head>
        <Navbar absolute={navbarAbsolute} />
        <ToastContainer />
        <Container 
        full={ full } 
        fluid={ fluid }>
            {breadcrumb && (
                <Breadcrumb label={breadcrumbLabel}/>
            )} 
            { children }
        </Container>
    </Fragment>
)