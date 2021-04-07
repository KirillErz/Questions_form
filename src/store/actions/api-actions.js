
import {loadFormData, getFormStatus, getStaffPollStatus, getPollStatus} from './action'

export const fetchFormData = (token, key, poll_type) => (dispatch, _getState, api) => (
  dispatch(loadFormData({datetime:'data.datetime', theme:'data.theme'}))
  // api.post(`/data_by_token`, {"token": token, "key": key, "poll": poll_type})
  //   .then(({data}) => {
  //     switch(data.status) {
  //       case 200:
  //         dispatch(loadFormData({datetime:data.datetime, theme:data.theme}));
  //         break;
  //       case 400:
  //         dispatch(getFormStatus(data.text));
  //         break;
  //       default:
  //         dispatch(getFormStatus(`Ошибка загруки`));
  //     }
  //   })
  //   .catch(({response}) => {
  //     if(response)
  //       dispatch(getFormStatus(response.error_text));
  //     else
  //     dispatch(getFormStatus(`Ошибка загруки`));
  //     throw Error(`Ошибка загруки`);
  //   })
);


export const savePoll = (token, isConnectConsultation, advice, rating, textComment) => (dispatch, _getState, api) => (
  //console.log(isConnectConsultation, advice, rating, textComment),
  api.post(`/save_poll`, {token, isConnectConsultation, advice, rating, textComment})
    .then(({data}) => {
      dispatch(getPollStatus({statusText:data.text}))
    })
    .catch(() => {
      dispatch(getPollStatus({statusText:`Ошибка сохранения`}))
      throw Error(`Ошибка сохранения`);
    })
);




export const saveStaffPoll = (token, fullName, isConnectConsultation, isConnectOnTime, isConnectedWhosignedUp, applicantslName, isCorrespondTthemeConsultation, isEnoughTime, isDecideQuestion, noTechProblems, questionDeclarer, textComment) => (dispatch, _getState, api) => (
  api.post(`/save_staff_poll`, {token, fullName, isConnectConsultation, isConnectOnTime, isConnectedWhosignedUp, applicantslName, isCorrespondTthemeConsultation, isEnoughTime, isDecideQuestion, noTechProblems, questionDeclarer, textComment})
    .then(({data}) => {
      dispatch(getStaffPollStatus({statusText:data.text}))
    })
    .catch(() => {
      dispatch(getStaffPollStatus({statusText:`Ошибка сохранения`}))
      throw Error(`Ошибка сохранения`);
    })
);




