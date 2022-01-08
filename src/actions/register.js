import { PHONE_NUMBER_CHANGE } from "../constants";

export function changePhoneNumber(phoneNumber) {
return {
    type: PHONE_NUMBER_CHANGE,
    payload: phoneNumber
  }
}
