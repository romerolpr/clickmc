import { userService } from '../../services'

// menu dinâmico da aplicação
export const initialLinks = [
  {
    pathname: '/contato',
    label: 'Fale conosco'
  },
  {
    pathname: '/',
    label: 'Acessar conta',
    dropdown: [
      {
        pathname: '/acesso/medico',
        label: 'Médico'
    },
    {
        pathname: '/acesso/paciente',
        label: 'Paciente'
      }
    ]
  },
]

export const initialLinksWithSession = [
  {
    pathname: '/',
    async: true,
    dropdown: [
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
  },
  {
    pathname: '/acompanhar',
    label: 'Minhas consultas'
  },
  {
    pathname: '/buscar',
    label: 'Novo agendamento'
  },
  {
    pathname: '/contato',
    label: 'Fale conosco'
  },
  {
    pathname: '/notificacoes',
    icon: 'bi-bell'
  }
]