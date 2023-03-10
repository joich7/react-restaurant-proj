import React from "react";
import ReactDOM from "react-dom/client";

//import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
//import Menu from "./components/Menu";
//import Home from "./components/Home";
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  //  <BrowserRouter>
  //    <Routes>
  //      <Route path="/" element={<App />}>
  //        <Route path="/" element={<Navigate to="home" />} />
  //        <Route path="menu" element={<Menu />} />
  //        <Route path="home" element={<Home />} />
  //      </Route>
  //    </Routes>
  //  </BrowserRouter>
  //</React.StrictMode>
  //<React.StrictMode>
    <App />
  //cd </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
