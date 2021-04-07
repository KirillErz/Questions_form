import React from "react";

const NotAvailable = (props) => {
  return (
    <div className="wrapper__not-available">
      <h2>{props.status}</h2>
    </div>
  )
}

export default NotAvailable;
