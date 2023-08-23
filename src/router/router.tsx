import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Calendar from "../components/calendar/Calendar";
import Schedule from "../components/schedule/Schedule";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/info",
        element: <h1>info</h1>,
      },
      {
        path: "/calendar/:year/:month",
        element: <Calendar />,
      },
      {
        path: "/schedule/:year/:month",
        element: <Schedule />,
      },
      {
        path: "/address",
        element: <h1>address</h1>,
      },
    ],
  },
]);

export default Router;
