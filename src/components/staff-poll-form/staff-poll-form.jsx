
import React, {useState, useEffect} from "react";
import WrapperForm from "../wrapper-form/wrapper-form";
import StaffPollInner from "../staff-poll-inner/staff-poll-inner";
import NotAvailable from "../not-available/not-available";
import {connect} from "react-redux";
import {getFormData, getFormStatus} from "../../store/reducers/selectors";
import {fetchFormData} from "../../store/actions/api-actions";
import Helmet from 'react-helmet'

const StaffPollForm = (props) => {

  const {token, query, formData, formStatus, loadCurrentForm} = props;
  const {key} = query
  useEffect(() => {
    loadCurrentForm(token, key, formData);
  }, [token, key]);

  return (
    <WrapperForm>
       <Helmet>
          <title>Отчет о проведенной онлайн-консультации</title>
      </Helmet>
      { formData ? (
      <StaffPollInner
        token={token}
        title={`Отчет о проведенной онлайн-консультации`}
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
    dispatch(fetchFormData(token, key, "staff"));
  }
});

export {StaffPollForm};
export default connect(mapStateToProps, mapDispatchToProps)(StaffPollForm);
