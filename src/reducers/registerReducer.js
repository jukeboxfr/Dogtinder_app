import { PHONE_NUMBER_CHANGE } from "../constants";

const initialState = {
  phoneNumber: {
    country: "FR",
    code: "+33",
    number: "768501670"
  }
}

const registerReducer = (state = initialState, action) => {

  switch (action.type) {
    case PHONE_NUMBER_CHANGE:
      return { ...state, phoneNumber: action.payload }
    default:
      return state;
  }
}

export default registerReducer
