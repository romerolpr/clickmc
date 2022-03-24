import { Fragment, useState } from "react";
import { NextLink } from "../";

// importa os links do menu dinâmico
import { initialLinks as withoutSessionLink } from "../../_settings/menu/routes";
import { initialLinksWithSession as withSessionLink } from "../../_settings/menu/routes";
import styles from '/src/_assets/css/modules/navbarCollapse.module.css';

import { userService } from "../../services";
import { useRouter } from 'next/router';

export const NavbarCollapse = () => {
  
  const router = useRouter()
  const [ showCollapse, setShowCollapse ] = useState(false)

  const AutoLinks = ({ link }) => {
    return (
      link && link.map( (route, key) => {
        return !route.dropdown ? (
          <li className="nav-item" key={key}>
            {route.event == undefined ? <NextLink href={route.pathname} label={route.async == undefined ? route.label : `Olá, ${userService.userValue.username}`} icon={route.icon != undefined ? route.icon : null}/> : (
              <a className="nav-link" href={route.pathname} onClick={ e => {
                e.preventDefault()
                route.event()
              }}>{route.label}</a>
            )}
          </li>
        ) : (
          <li className="nav-item dropdown" key={key}>
            <a className={route.bespeak ? `nav-link dropdown-toggle ${styles.bespeak}` : "nav-link dropdown-toggle"} href={route.pathname} title={route.label} onClick={
              (e) => {
                e.preventDefault()
                // ao clicar, troca valor pra exibir dropdown
                setShowCollapse(!showCollapse)
              }
              }>{route.async == undefined ? route.label : `Olá, ${userService.userValue.username}`}</a>
            <ul className="dropdown-menu" style={{ 
              // dependendo do valor da variavel, exibe ou não
              display: showCollapse ? 'block' : 'none'
            }}>
              {route.dropdown.map((dropdown, dropKey) => (
                <li className="nav-item" key={dropKey}>
                  {dropdown.event == undefined ? <NextLink href={dropdown.pathname} label={dropdown.label} className="dropdown-item"/> : (
                    <a className="dropdown-item" href={dropdown.pathname} onClick={ e => {
                      e.preventDefault()
                      dropdown.event()
                      router.push(dropdown.pathname)
                    }}>{dropdown.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </li>
        )
      })
    )
  }

  return (
    <Fragment>
      <button className="navbar-toggler p-0 border-0" onClick={ e => {
        e.preventDefault()
        // ao clicar, troca valor pra exibir dropdown
        setShowCollapse(!showCollapse)
      }}>
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`navbar-collapse offcanvas-collapse ${styles.navbar_flex_grow}`}>
        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navbar_float_right}`}>
            { userService.userValue == undefined ? <AutoLinks link={withoutSessionLink} /> : <AutoLinks link={withSessionLink}/> }
        </ul>
      </div>
    </Fragment>
  )
}