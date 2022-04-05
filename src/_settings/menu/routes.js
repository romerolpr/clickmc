import { userService } from '../../services'
import { MEDICAL_ACCOUNT_LEVEL } from '../_auth'

// console.log(
//   'type', userService.userValue._type,
//   'medical account type', MEDICAL_ACCOUNT_LEVEL
// )

const defaultDropdown = [
  {
    pathname: '/perfil',
    label: 'Minha conta'
  },
  {
    pathname: '/',
    label: 'Sair',
    event: () => userService.logout()
  }
]

const _defaultLinks = userService.userValue?._type != MEDICAL_ACCOUNT_LEVEL ? [
  {
    pathname: '/acompanhar',
    label: 'Meus agendamentos'
  },
  {
    pathname: '/buscar',
    label: 'Buscar'
  } 
] : [
  {
    pathname: '/acompanhar',
    label: 'Minhas consultas'
  }
]

const _withoutSession = [
  {
    pathname: '/contato',
    label: 'Fale conosco'
  },
  {
    pathname: '/acesso',
    label: 'Acessar conta'
  },
]

const _withSession = [
  {
    pathname: '/',
    async: true,
    dropdown: userService.userValue?._type != MEDICAL_ACCOUNT_LEVEL ? defaultDropdown : [
      {
        pathname: '/dashboard',
        label: 'Dashboard'
      },
      ...defaultDropdown
    ]
  }
]

/**
 * With session; is logged
 */
const initialLinksWithSession = [
  ..._withSession,
  ..._defaultLinks,
  {
    pathname: '/contato',
    label: 'Fale conosco'
  },
  {
    pathname: '/notificacoes',
    icon: 'bi-bell'
  }
]

/**
 * No session started; is not logged
 */
const initialLinks = _withoutSession

export {
  initialLinksWithSession,
  initialLinks
}