import { useState, useEffect } from "react";
import { NextLink } from "./";

// importa os links do menu dinâmico
import { initialLinks } from "../_settings/menu/routes";
import styles from '/src/_assets/css/modules/navbarCollapse.module.css';

export const NavbarCollapse = () => {

  const [ links, setLinks ] = useState(undefined)
  const [ showCollapse, setShowCollapse ] = useState(false)
  
  useEffect(() => {
    setLinks(initialLinks)
  }, [])

  return (
      <div className={`navbar-collapse offcanvas-collapse ${styles.navbar_flex_grow}`}>
        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navbar_float_right}`}>
          {links && links.map((route, key) => {
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
          })}
        </ul>
      </div>
  )
}