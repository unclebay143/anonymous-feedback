import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router, useHistory } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ClerkProviderWithNavigate>
        <App />
      </ClerkProviderWithNavigate>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

function ClerkProviderWithNavigate({ children }) {
  const { push } = useHistory();
  return (
    <ClerkProvider
      frontendApi={process.env.REACT_APP_CLERK_FRONTEND_API}
      navigate={(to) => {
        return push(to);
      }}
    >
      {children}
    </ClerkProvider>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
