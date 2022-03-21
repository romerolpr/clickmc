import { Fragment, useState } from "react";
import { NextLink } from "./";

// importa os links do menu dinâmico
import { initialLinks as links } from "../_settings/menu/routes";
import styles from '/src/_assets/css/modules/navbarCollapse.module.css';

import { userService } from "../services";
import Link from "next/link";

export const NavbarCollapse = () => {

  const [ showCollapse, setShowCollapse ] = useState(false)

  const WithSession = () => (
    <Fragment>
      <li className="nav-item dropdown">
        <Link href={'/'}>
          <a className="nav-link dropdown-toggle" title={userService?.userValue.username} onClick={
              (e) => {
                e.preventDefault()
                // ao clicar, troca valor pra exibir dropdown
                setShowCollapse(!showCollapse)
              }
              }>
            Olá, {userService?.userValue.username}!
          </a>
        </Link>
        <div className="dropdown-menu" style={{ 
            // dependendo do valor da variavel, exibe ou não
            display: showCollapse ? 'block' : 'none'
          }}>
          <NextLink href={'/minha-conta'} label={'Minha conta'} className="dropdown-item"/>
          <div className="dropdown-divider"></div>
          <Link href={'/?end_session'}>
            <a className="dropdown-item" onClick={(e) => {
              e.preventDefault()
              setShowCollapse(false)
              userService.logout()
            }}>Sair</a>
          </Link>
        </div>
      </li>
      <li className="nav-item">
        <Link href={'/consultas'}>
          <a className="nav-link" title='Minhas consultas'>
            Minhas consultas
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link" title='Alerta'>
          <i className="bi bi-bell"></i>
        </a>
      </li>
    </Fragment>
  )

  const WithoutSession = () => {
    return (
      links && links.map((route, key) => {
        return !route.dropdown ? (
          <li className="nav-item" key={key}>
            <NextLink href={route.pathname} label={route.label}/>
          </li>
        ) : (
          <li className="nav-item dropdown" key={key}>
            <a className={route.bespeak ? `nav-link dropdown-toggle ${styles.bespeak}` : "nav-link dropdown-toggle"} href={route.pathname} title={route.label} onClick={
              (e) => {
                e.preventDefault()
                // ao clicar, troca valor pra exibir dropdown
                setShowCollapse(!showCollapse)
              }
              }>{route.label}</a>
            <ul className="dropdown-menu" style={{ 
              // dependendo do valor da variavel, exibe ou não
              display: showCollapse ? 'block' : 'none'
            }}>
              {route.dropdown.map((dropdown, dropKey) => (
                <li className="nav-item" key={dropKey}>
                  <NextLink href={dropdown.pathname} label={dropdown.label} className="dropdown-item"/>
                </li>
              ))}
            </ul>
          </li>
        )
      })
    )
  }

  return (
      <div className={`navbar-collapse offcanvas-collapse ${styles.navbar_flex_grow}`}>
        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navbar_float_right}`}>
            { userService.userValue == undefined ? <WithoutSession /> : <WithSession /> }
        </ul>
      </div>
  )
}