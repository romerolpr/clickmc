// menu dinâmico da aplicação
export const initialLinks = [
    {
        pathname: '/contato',
        label: 'Contato'
    },
    {
        pathname: '/',
        label: 'Minha conta',
        // bespeak: true,
        dropdown: [
            {
                pathname: '/login?_type=medico',
                label: 'Sou Médico'
            },
            {
                pathname: '/login?_type=paciente',
                label: 'Sou Paciente'
            }
        ]
    },
]