import React from "react";

export const ForgotPassword = () => {
  return (
    <React.Fragment>
      <div className="mt-3 auth-form">
        <input
          placeholder="Enter registered email"
          type="text"
          required
          className="form-control form-control-lg mb-3"
        />
        <button className="form-control mb-3">Send</button>
      </div>
    </React.Fragment>
  );
};
