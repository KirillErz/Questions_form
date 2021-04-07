
import React, {useState, useEffect} from "react";
import WrapperForm from "../wrapper-form/wrapper-form";
import PollInner from "../poll-inner/poll-inner";
import NotAvailable from "../not-available/not-available";
import {connect} from "react-redux";
import {getFormData, getFormStatus} from "../../store/reducers/selectors";
import {fetchFormData} from "../../store/actions/api-actions";
import Helmet from 'react-helmet'

const PollForm = (props) => {

  const {token, formData, formStatus, loadCurrentForm, query} = props;
  const {key} = query
  useEffect(() => {
    loadCurrentForm(token, key, formData);
  }, [token, key]);

  return (
    <WrapperForm>
      <Helmet>
          <title>Опрос о проведенной онлайн-консультации</title>
      </Helmet>
      { formData ? (
      <PollInner
        token={token}
        title={`Опрос о качестве проведения консультации `}
        datetime={formData.datetime}
        theme={formData.theme}
      />): <NotAvailable
              status={formStatus}
           />}
    </WrapperForm>
  );
}

const mapStateToProps = (state) => ({
  formData: getFormData(state),
  formStatus: getFormStatus(state),
})

const mapDispatchToProps = (dispatch) => ({
  loadCurrentForm(token, key) {
    dispatch(fetchFormData(token, key, "citizen"));
  }
});

export {PollForm};
export default connect(mapStateToProps, mapDispatchToProps)(PollForm);
