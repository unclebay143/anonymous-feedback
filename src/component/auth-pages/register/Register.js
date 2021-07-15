import React from "react";

export const Register = () => {
  return (
    <React.Fragment>
      <div className="mt-3 auth-form">
        <input
          placeholder="Enter username"
          type="text"
          required
          className="form-control form-control-lg mb-3"
        />
        <input
          placeholder="Enter email"
          type="email"
          required
          className="form-control form-control-lg mb-3"
        />
        <input
          placeholder="Create password"
          type="text"
          required
          className="form-control form-control-lg mb-3"
        />
        <button className="form-control mb-3">Register</button>
      </div>
    </React.Fragment>
  );
};
