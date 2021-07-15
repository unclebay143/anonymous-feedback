import React from "react";

export const Login = () => {
  return (
    <React.Fragment>
      <form className="mt-3 auth-form">
        <input
          placeholder="Enter username"
          type="text"
          required
          className="form-control form-control-lg mb-3"
        />
        <input
          placeholder="Enter password"
          type="text"
          required
          className="form-control form-control-lg mb-3"
        />
        <button className="form-control form-control-lg mb-3">Login</button>
      </form>
    </React.Fragment>
  );
};
