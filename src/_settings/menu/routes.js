// menu dinâmico da aplicação
export const initialLinks = [
    {
        pathname: '/contato',
        label: 'Contato'
    },
    {
        pathname: '/',
        label: 'Criar conta',
        // bespeak: true,
        dropdown: [
            {
                pathname: '/acesso/medico',
                label: 'Sou Médico'
            },
            {
                pathname: '/acesso/paciente',
                label: 'Sou Paciente'
            }
        ]
    },
]