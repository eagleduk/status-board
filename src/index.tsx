import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Reset } from "styled-reset";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/info",
        element: <h1>info</h1>,
      },
      {
        path: "/calendar",
        element: <h1>calendar</h1>,
      },
      {
        path: "/address",
        element: <h1>address</h1>,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Reset />
    <RouterProvider router={router} />
  </React.StrictMode>
);
