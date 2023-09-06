import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Calendar from "../components/calendar/Calendar";
import Schedule from "../components/schedule/Schedule";

const Router = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}`,
    element: <App />,
    children: [
      {
        path: `${process.env.PUBLIC_URL}/info`,
        element: <h1>info</h1>,
      },
      {
        path: `${process.env.PUBLIC_URL}/calendar/:year/:month`,
        element: <Calendar />,
      },
      {
        path: `${process.env.PUBLIC_URL}/schedule`,
        element: <Schedule />,
      },
      {
        path: `${process.env.PUBLIC_URL}/address`,
        element: <h1>address</h1>,
      },
    ],
  },
]);

export default Router;
