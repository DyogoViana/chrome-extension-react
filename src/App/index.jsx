import React from "react";
import { render } from "react-dom";
import App from "./app.jsx";

const app = (
    <App />
);

render(app, window.document.querySelector("#app-container"));

if (module.hot) module.hot.accept();