import { createStore } from "redux";

const initialState = {
  formData: { email: "test@gmail.com", password: "test123" }
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "POST_DATA_SUCCESS":
      return {
        formData: action.formData
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
