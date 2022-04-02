import { 
    CLIENT_ACCOUNT_LEVEL,
    MEDICAL_ACCOUNT_LEVEL } from "../_settings/_auth"

export const identifyAccount = nvlAccess => {
    if (nvlAccess == 0) {
        return CLIENT_ACCOUNT_LEVEL
    }
    return MEDICAL_ACCOUNT_LEVEL
}