export const getByStatus = (status) => {

    switch (status) {
        case 1:
            return {
                text: "Aguardando confirmação",
                cutText: "Aguardando",
                css: { backgroundColor: '#52ad68 !important' },
                color: '#52ad68'
            }
        case 2:
            return {
                text: "Confirmado pelo médico especialista",
                cutText: "Confirmado",
                css: { backgroundColor: '#52ad68 !important' },
                color: '#52ad68'
            }
        case 3:
            return {
                text: "Cancelado pelo médico especialista",
                cutText: "Cancelado",
                css: { backgroundColor: '#cf6262 !important' },
                color: '#cf6262'
            }
        case 4:
            return {
                text: "Encerrado pelo médico especialista",
                cutText: "Encerrado",
                css: { backgroundColor: '#8d8d8d !important' },
                color: '#8d8d8d'
            }
        case 5:
            return {
                text: "Encerrado por tempo limite",
                cutText: "Timeout",
                css: { backgroundColor: '#8d8d8d !important' },
                color: 'var(--danger)'
            }
        case 6:
            return {
                text: "Cancelado pelo usuário",
                cutText: "Cancelado",
                css: { backgroundColor: '#8d8d8d !important' },
                color: '#8d8d8d'
            }
        default:
            return {
                text: "Encaminhado para o médico especialista",
                cutText: "Encaminhado",
                css: { backgroundColor: '#6c5ce7 !important' },
                color: '#6c5ce7'
            }
    }
}