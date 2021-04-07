import {extend} from "../../../utils/utils";
import {ActionType} from "../../actions/action";

const initialState = {
  formData: null,
  staffPollStatus: null,
  pollStatus: null,
  formStatus: ""
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FORM_DATA:
      return extend(state, {formData: action.payload});
    case ActionType.GET_STAFF_POLL_STATUS:
      return extend(state, {staffPollStatus: action.payload});
    case ActionType.GET_POLL_STATUS:
      return extend(state, {pollStatus: action.payload});
    case ActionType.GET_FORM_STATUS:
      return extend(state, {formStatus: action.payload});
  }

  return state;
};



export {data};
