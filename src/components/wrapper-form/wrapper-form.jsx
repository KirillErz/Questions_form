import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {addReview, fetchFormData} from "../../store/actions/api-actions";
import {getFormData} from "../../store/reducers/selectors";
import queryString from "query-string";

const WrapperForm = (props) => {

  return (
    <section className="wrapper">
      <header className="header">
        <picture className="header__logo">
          <img src="../img/Logo_DGI.png" alt="Департамент городского имущества города москвы"/>
        </picture>
      </header>
      {props.children}
    </section>
  )
};

export default WrapperForm;
