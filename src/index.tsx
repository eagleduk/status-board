import React from "react";
import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";
import { RouterProvider } from "react-router-dom";
import Router from "./router/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = Router;

root.render(
  <React.StrictMode>
    <Reset />
    <RouterProvider router={router} />
  </React.StrictMode>
);
