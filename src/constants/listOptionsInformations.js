import { userService } from "../services"
import { MEDICAL_ACCOUNT_LEVEL } from "../_settings/_auth"

export const listOptionsInformations = (value) => {
  return {
      date: value.appointment.date,
      time: value.appointment.time,
      urlCode: value.urlCode,
      status: value.status,
      getBackdrop: () => {
          if (MEDICAL_ACCOUNT_LEVEL != userService.userValue._type) {
              return value.medicalDetails.backdrop
          }
          return value.userDetails.backdrop
      },
      getName: () => {
          if (MEDICAL_ACCOUNT_LEVEL != userService.userValue._type) {
              return `Dr. ${value.medicalDetails.name}`
          }
          return `${value.userDetails.name}`
      }
  }
}