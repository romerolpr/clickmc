import { userService } from "../services"
import { MEDICAL_ACCOUNT_LEVEL } from "../_settings/_auth"

export const getByStatus = (status) => {

    const { _type } = userService.userValue

    switch (status) {
        case 1:
            return {
                text: MEDICAL_ACCOUNT_LEVEL == _type ? "Aguardando sua confirmação" : "Aguardando confirmação do especialista",
                cutText: "Aguardando",
                css: { backgroundColor: '#52ad68 !important' },
                color: '#52ad68'
            }
        case 2:
            return {
                text: MEDICAL_ACCOUNT_LEVEL == _type ? "Confirmado por você" : "Confirmado pelo médico especialista",
                cutText: "Confirmado",
                css: { backgroundColor: '#52ad68 !important' },
                color: '#52ad68'
            }
        case 3:
            return {
                text: MEDICAL_ACCOUNT_LEVEL == _type ? "Cancelado por você" : "Cancelado pelo médico especialista",
                cutText: "Cancelado",
                css: { backgroundColor: '#cf6262 !important' },
                color: '#cf6262'
            }
        case 4:
            return {
                text: MEDICAL_ACCOUNT_LEVEL == _type ? "Encerrado por você" : "Encerrado pelo médico especialista",
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
                text: MEDICAL_ACCOUNT_LEVEL == _type ? "Encaminhado para você" : "Encaminhado para o médico especialista",
                cutText: "Encaminhado",
                css: { backgroundColor: '#6c5ce7 !important' },
                color: '#6c5ce7'
            }
    }
}