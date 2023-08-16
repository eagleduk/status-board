import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Calendar from "../components/calendar/Calendar";

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
        path: "/address",
        element: <h1>address</h1>,
      },
    ],
  },
]);

export default Router;
