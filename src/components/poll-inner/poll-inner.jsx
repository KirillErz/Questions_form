import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {savePoll} from "../../store/actions/api-actions";
import {getPollStatus} from "../../store/reducers/selectors";
import queryString from "query-string";
import Success from "../success/success";

const PollInner = (props) => {
  const {token, title, datetime, theme, onSubmit, pollStatus} = props;



  let [isConnectConsultation, setIsConnectConsultation] = useState();
  let [advice, setAdvice] = useState();
  let [rating, setRating] = useState();
  const [textComment, setText] = useState(``);


  const isDisabled = () => {
    if (isConnectConsultation == undefined) {
      return true;
    } else if(!isConnectConsultation) {
      if (advice != undefined || rating != undefined) {
        setAdvice(null);
        setRating(null);
      }
      return false;
    } else {
      if (advice == undefined || rating == undefined) {
        if (!advice && advice !=undefined) {
          if (rating !=undefined) {
            setRating(null);
            setText('');
          }
          return false;
        }
        return true;
      } else {
        if(rating == 1 || rating == 2 || rating == 3) {
          if(textComment != '' || !advice){
            return false;
          } else {
            return true;
          }
        } else {
          return false;
        }
      }
    }
  }

  const showAdvice = () => {
    if (isConnectConsultation == undefined) {
      return true;
    } else if (isConnectConsultation) {
      return true;
    } else {
      return false;
    }
  }

  const showRating = () => {
    if (advice == undefined) {
      return true;
    } else if (advice) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <React.Fragment>
    { !pollStatus ? (
      <div className="wrapper__form">
          <div className="mb-3 wrapper__title-wrapper-form">
            <h3 className="mb-3 wrapper__form-title">{title}</h3>
            <span className="wrapper__form-date"> в {datetime} по теме:</span>
            <span className="wrapper__form-theme">{theme}</span>
          </div>
          <form
            action="#"
            className="add-review__form"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log(advice, rating, textComment);
              onSubmit(token, isConnectConsultation, advice, rating, textComment);
            }
            }>
            <fieldset className="mb-5">
              <h5>Подключился ли сотрудник на консультацию?</h5>
              <div className="custom-control custom-radio custom-control-inline">
                <input required type="radio"  value="true" id="answeredYes" name="isConnectConsultation" className="custom-control-input"
                  onChange={(e) => {
                    setIsConnectConsultation((e.target.value === 'true'));
                }}/>
                <label className="custom-control-label" htmlFor="answeredYes">Да</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input required type="radio" value="false" id="answeredNo" name="isConnectConsultation" className="custom-control-input"
                  onChange={(e) => {
                    setIsConnectConsultation((e.target.value === 'true'));
                  }}/>
                <label className="custom-control-label" htmlFor="answeredNo">Нет</label>
              </div>
            </fieldset>
            { showAdvice() &&
              <React.Fragment>
                <fieldset className="mb-5">
                  <h5>Получили ли вы консультацию по своему вопросу?</h5>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input required type="radio" value="true" id="isAdviceYes" name="isAdvice" className="custom-control-input"
                    onChange={(e) => {
                      setAdvice((e.target.value === 'true'));
                    }}/>
                    <label className="custom-control-label" htmlFor="isAdviceYes">Да</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input required type="radio" value="false" id="isAdviceNo" name="isAdvice" className="custom-control-input"
                    onChange={(e) => {
                      setAdvice((e.target.value === 'true'));
                    }}/>
                    <label className="custom-control-label" htmlFor="isAdviceNo">Нет</label>
                  </div>
                </fieldset>
                { showRating() &&
                  <React.Fragment>
                    <div className="d-block mb-3">
                      <h5>Оцените качество консультации</h5>
                      <div className="custom-control custom-radio ">
                        <input required type="radio" value="5" id="rating1" name="rating" className="custom-control-input"
                        onChange={(e) => {
                          setRating(parseInt(e.target.value, 10));
                        }}/>
                        <label className="custom-control-label" htmlFor="rating1">Отлично</label>
                      </div>
                      <div className="custom-control custom-radio ">
                        <input required type="radio" value="4" id="rating2" name="rating" className="custom-control-input"
                        onChange={(e) => {
                          setRating(parseInt(e.target.value, 10));
                        }}/>
                        <label className="custom-control-label" htmlFor="rating2">Хорошо</label>
                      </div>
                      <div className="custom-control custom-radio ">
                        <input required type="radio" value="3" id="rating3" name="rating" className="custom-control-input"
                        onChange={(e) => {
                          setRating(parseInt(e.target.value, 10));
                        }}/>
                        <label className="custom-control-label" htmlFor="rating3">Удовлетворительно</label>
                      </div>
                      <div className="custom-control custom-radio ">
                        <input required type="radio" value="2" id="rating4" name="rating" className="custom-control-input"
                        onChange={(e) => {
                          setRating(parseInt(e.target.value, 10));
                        }}/>
                        <label className="custom-control-label" htmlFor="rating4">Неудовлетворительно</label>
                      </div>
                      <div className="custom-control custom-radio ">
                        <input required type="radio" value="1" id="rating5" name="rating" className="custom-control-input"
                        onChange={(e) => {
                          setRating(parseInt(e.target.value, 10));
                        }}/>
                        <label className="custom-control-label" htmlFor="rating5">Затрудняюсь ответить</label>
                      </div>
                    </div>
                  </React.Fragment>
                }
              </React.Fragment>
            }
            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="textComment"
                id="text"
                placeholder="Введите комментарий"
                value={textComment}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              <div className="mt-3 add-review__submit">
                <button
                  className={`catalog__genres-item ${(isDisabled()) ? `btn btn-secondary btn-lg ` : `btn btn-lg btn-primary`} `}
                  type="submit"
                  disabled={isDisabled()}
                >
                  Отправить
                </button>
              </div>
            </div>
          </form>
      </div>)
      : <Success
         status={pollStatus.statusText}
      />}
    </React.Fragment>
  )
};

const mapStateToProps = (state) => ({
  pollStatus: getPollStatus(state),
})

const mapDispatchToProps = (dispatch) => ({

  onSubmit(token, isConnectConsultation, advice, rating, textComment) {
    if (!isConnectConsultation) {
      advice = null;
      rating = null;
      textComment = null;
    }
    if (!advice) {
      rating = null;
    }
    dispatch(savePoll(token, isConnectConsultation, advice, rating, textComment));
  }
});

export {PollInner};
export default connect(mapStateToProps, mapDispatchToProps)(PollInner);
