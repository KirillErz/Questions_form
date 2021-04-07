export const ActionType = {
  LOAD_FORM_DATA: `LOAD_FORM_DATA`,
  GET_STAFF_POLL_STATUS: `GET_STAFF_POLL_STATUS`,
  GET_POLL_STATUS: `GET_POLL_STATUS`,
  GET_FORM_STATUS: `GET_FORM_STATUS`,
};

export const loadFormData = (formData) => ({
  type: ActionType.LOAD_FORM_DATA,
  payload: formData
});

export const getStaffPollStatus = (status) => ({
  type: ActionType.GET_STAFF_POLL_STATUS,
  payload: status
});

export const getPollStatus = (status) => ({
  type: ActionType.GET_POLL_STATUS,
  payload: status
});

export const getFormStatus = (status) => ({
  type: ActionType.GET_FORM_STATUS,
  payload: status
});
