import {connect} from "react-redux";
import {saveStaffPoll} from "../../store/actions/api-actions";
import Success from "../success/success";
import React, {useState, useEffect} from "react";
import {getStaffPollStatus} from "../../store/reducers/selectors";

const StaffPollInner = (props) => {
  const {token, title, datetime, theme, onSubmit, staffPollStatus} = props;

  const [fullName, setFullName] = useState(``);
  const [isConnectConsultation, setIsConnectConsultatione] = useState();
  const [isConnectOnTime, setIsConnectOnTime] = useState();
  const [isCorrespondTthemeConsultation, setiSCorrespondTthemeConsultation] = useState();
  const [isEnoughTime, setIsEnoughTime] = useState();
  const [isDecideQuestion, setIsDecideQuestion] = useState('');
  const [noTechProblems, setNoTechProblems] = useState();
  const [questionDeclarer, setQuestionDeclarer] = useState('');
  const [textComment, setTextComment] = useState(``);
  const [isConnectedWhosignedUp, setIsConnectedWhosignedUp] = useState();
  const [applicantslName, setApplicantslName] = useState(``);

    const isDisabled = () => {
      if ((fullName == '' || isConnectConsultation == undefined || noTechProblems == undefined)) {
        return true;
      } else  {
        if(isConnectConsultation){
          if (questionDeclarer == '' ||  isConnectOnTime == undefined || isConnectedWhosignedUp == undefined || isCorrespondTthemeConsultation == undefined || isEnoughTime == undefined || isDecideQuestion == undefined || noTechProblems == undefined) {
            return true;
          } else {
            if(isConnectedWhosignedUp) {
              return false;
            } else if(applicantslName == '') {
              return true;
            } else {
              return false;
            }
          }
        }
        return false;
      }
    }

    const showAll = (flag) => {
      if (flag == undefined) {
        return true;
      } else if (flag) {
        return true;
      } else {
        return false;
      }
    }

    const showApplicantslName = (flag) => {
      if (flag == undefined) {
        return false;
      } else if (flag) {
        return false;
      } else {
        return true;
      }
    }



   return (
    <React.Fragment>
    { !staffPollStatus ? (
      <div className="wrapper__form">
          <div className="mb-3 wrapper__title-wrapper-form">
            <h3 className="mb-3 wrapper__form-title">{title}</h3>
            <span className="wrapper__form-date"> ?? {datetime} ???? ????????:</span>
            <span className="wrapper__form-theme">{theme}</span>
          </div>
          <form action="#"
              className="staff-poll__form"
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onSubmit(token, fullName,
                  isConnectConsultation,
                  isConnectOnTime,
                  isConnectedWhosignedUp,
                  applicantslName,
                  isCorrespondTthemeConsultation,
                  isEnoughTime,
                  isDecideQuestion,
                  noTechProblems,
                  questionDeclarer,
                  textComment);
              }}>
            <div className="mb-3">
              <input className="form-control staff-poll__input" id="focusedInput" value={fullName} name="fullName" placeholder="?????? ???????????????????? ???????????????????????? ????????????????????????" onChange={(e) => {
                    setFullName(e.target.value);
                  }}/>
            </div>
            <fieldset className="mb-5">
                <h5>?????????????????? ?????????????????????? ?? ?????????????????????????</h5>
                <div className="custom-control custom-radio custom-control-inline">
                  <input required type="radio"  value="true" id="isConnectConsultationYes" name="isConnectConsultation" className="custom-control-input"
                    onChange={(e) => {
                      setIsConnectConsultatione((e.target.value === 'true'));
                  }}/>
                  <label className="custom-control-label" htmlFor="isConnectConsultationYes">????</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input required type="radio" value="false" id="isConnectConsultationNo" name="isConnectConsultation" className="custom-control-input"
                    onChange={(e) => {
                      setIsConnectConsultatione((e.target.value === 'true'));
                    }}/>
                  <label className="custom-control-label" htmlFor="isConnectConsultationNo">??????</label>
                </div>
              </fieldset>
              { showAll(isConnectConsultation) &&
                <React.Fragment>
                  <fieldset className="mb-5">
                    <h5>?????????????????? ?????????????????????? ???????????????</h5>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input required type="radio"   value="true" id="isConnectOnTimeYes" name="isConnectOnTime" className="custom-control-input"
                        onChange={(e) => {
                          setIsConnectOnTime((e.target.value === 'true'));
                      }}/>
                      <label className="custom-control-label" htmlFor="isConnectOnTimeYes">????</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input required type="radio"  value="false" id="isConnectOnTimeNo" name="isConnectOnTime" className="custom-control-input"
                        onChange={(e) => {
                          setIsConnectOnTime((e.target.value === 'true'));
                        }}/>
                      <label className="custom-control-label" htmlFor="isConnectOnTimeNo">??????</label>
                    </div>
                  </fieldset>
                  <fieldset className="mb-2">
                    <h5>?????????????????????? ??????, ?????? ???????????????????</h5>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input required type="radio"   value="true" id=" IsConnectedWhosignedUpYes" name=" isConnectedWhosignedUp" className="custom-control-input"
                        onChange={(e) => {
                          setIsConnectedWhosignedUp((e.target.value === 'true'));
                      }}/>
                      <label className="custom-control-label" htmlFor=" IsConnectedWhosignedUpYes">????</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input required type="radio"  value="false" id=" IsConnectedWhosignedUpNo" name=" isConnectedWhosignedUp" className="custom-control-input"
                        onChange={(e) => {
                          setIsConnectedWhosignedUp((e.target.value === 'true'));
                        }}/>
                      <label className="custom-control-label" htmlFor=" IsConnectedWhosignedUpNo">??????</label>
                    </div>
                  </fieldset>
                  { showApplicantslName(isConnectedWhosignedUp) &&
                    <div className="mb-5">
                      <textarea  className="form-control staff-poll__input" id="focusedInput" value={applicantslName} name="applicantslName" placeholder="?????????????? ?????? ????????????????????" onChange={(e) => {
                        setApplicantslName(e.target.value);
                      }}/>
                    </div>
                  }
                  <div className="mb-5 mt-5">
                    <input className="form-control staff-poll__input"   value={questionDeclarer} name="questionDeclarer" placeholder="?????????????? ???????????? ??????????????????" onChange={(e) => {
                        setQuestionDeclarer(e.target.value);
                      }}/>
                  </div>
                  <fieldset className="mb-5">
                    <h5>???????????? ?????????????????? ?????????????????????????? ???????? ?????????????????????????</h5>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input required type="radio"   value="true" id="isCorrespondTthemeConsultationYes" name="isCorrespondTthemeConsultation" className="custom-control-input"
                        onChange={(e) => {
                          setiSCorrespondTthemeConsultation((e.target.value === 'true'));
                      }}/>
                      <label className="custom-control-label" htmlFor="isCorrespondTthemeConsultationYes">????</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input required type="radio"  value="false" id="isCorrespondTthemeConsultationNo" name="isCorrespondTthemeConsultation" className="custom-control-input"
                        onChange={(e) => {
                          setiSCorrespondTthemeConsultation((e.target.value === 'true'));
                        }}/>
                      <label className="custom-control-label" htmlFor="isCorrespondTthemeConsultationNo">??????</label>
                    </div>
                  </fieldset>
                  <fieldset className="mb-5">
                    <h5>?????? ?????????????? ?????????????? ???? ?????????????? ?????????????? ??????????????????? </h5>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input required type="radio"   value="true" id="isEnoughTimeYes" name="isEnoughTime" className="custom-control-input"
                        onChange={(e) => {
                          setIsEnoughTime((e.target.value === 'true'));
                      }}/>
                      <label className="custom-control-label" htmlFor="isEnoughTimeYes">????</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input required type="radio"  value="false" id="isEnoughTimeNo" name="isEnoughTime" className="custom-control-input"
                        onChange={(e) => {
                          setIsEnoughTime((e.target.value === 'true'));
                        }}/>
                      <label className="custom-control-label" htmlFor="isEnoughTimeNo">??????</label>
                    </div>
                  </fieldset>
                  <fieldset className="mb-5">
                    <h5>?????? ?????????????? ???????????? ???????????? ???????????????????</h5>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input required type="radio"   value="true" id="isDecideQuestionYes" name="isDecideQuestion" className="custom-control-input"
                        onChange={(e) => {
                          setIsDecideQuestion((e.target.value === 'true'));
                      }}/>
                      <label className="custom-control-label" htmlFor="isDecideQuestionYes">????</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input required type="radio"  value="false" id="isDecideQuestionNo" name="isDecideQuestion" className="custom-control-input"
                        onChange={(e) => {
                          setIsDecideQuestion((e.target.value === 'true'));
                        }}/>
                      <label className="custom-control-label" htmlFor="isDecideQuestionNo">??????</label>
                    </div>
                  </fieldset>
                </React.Fragment>
              }
              <fieldset className="mb-5">
                <h5>???????????????????????? ???????????? ?????? ?????????????????????? ?????????????? ?</h5>
                <div className="custom-control custom-radio custom-control-inline">
                  <input required type="radio" value="true" id="noTechProblemsYes" name="noTechProblems" className="custom-control-input"
                    onChange={(e) => {
                      setNoTechProblems((e.target.value === 'true'));
                  }}/>
                  <label className="custom-control-label" htmlFor="noTechProblemsYes">????</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input required type="radio" value="false" id="noTechProblemsNo" name="noTechProblems" className="custom-control-input"
                    onChange={(e) => {
                      setNoTechProblems((e.target.value === 'true'));
                    }}/>
                  <label className="custom-control-label" htmlFor="noTechProblemsNo">??????</label>
                </div>
              </fieldset>
              <div className="add-review__text">
                <textarea
                  className="add-review__textarea"
                  name="textComment"
                  id="text"
                  placeholder="?????????????? ??????????????????????"
                  value={textComment}
                  onChange={(e) => {
                    setTextComment(e.target.value);
                  }}
                />
                <div className="mt-3 add-review__submit">
                  <button
                     className={`catalog__genres-item ${(isDisabled()) ? `btn btn-secondary btn-lg ` : `btn btn-lg btn-primary`} `}
                    type="submit"
                    disabled={isDisabled()}
                  >
                    ??????????????????
                  </button>
                </div>
              </div>
          </form>
      </div>)
      : <Success
          status={staffPollStatus.statusText}
        />}
    </React.Fragment>
   )
}

const mapStateToProps = (state) => ({
  staffPollStatus: getStaffPollStatus(state),
})

const mapDispatchToProps = (dispatch) => ({

  onSubmit(token, fullName,
    isConnectConsultation,
    isConnectOnTime,
    isConnectedWhosignedUp,
    applicantslName,
    isCorrespondTthemeConsultation,
    isEnoughTime,
    isDecideQuestion,
    noTechProblems,
    questionDeclarer,
    textComment) {
      if (!isConnectConsultation) {
        isConnectedWhosignedUp = null;
        applicantslName = null;
        isConnectOnTime = null;
        isCorrespondTthemeConsultation = null;
        isEnoughTime = null;
        isDecideQuestion = null;
        questionDeclarer = null;
      }
      if (isConnectedWhosignedUp) {
        applicantslName = null;
      }
    dispatch(saveStaffPoll(token, fullName,
      isConnectConsultation,
      isConnectOnTime,
      isConnectedWhosignedUp,
      applicantslName,
      isCorrespondTthemeConsultation,
      isEnoughTime,
      isDecideQuestion,
      noTechProblems,
      questionDeclarer,
      textComment));
  }
});

export {StaffPollInner};
export default connect(mapStateToProps, mapDispatchToProps)(StaffPollInner);

