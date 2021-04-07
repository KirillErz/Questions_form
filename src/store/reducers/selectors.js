import {createSelector} from "reselect";

export const getFormData = (state) => state.DATA.formData;
export const getStaffPollStatus = (state) => state.DATA.staffPollStatus;
export const getPollStatus = (state) => state.DATA.pollStatus;
export const getFormStatus = (state) => state.DATA.formStatus;
