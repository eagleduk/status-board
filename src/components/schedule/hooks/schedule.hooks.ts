import axios from "axios";
import { useState, useEffect } from "react";
import { TNotionDatabase, TSchedule } from "../type/schedule.type";

function useScheduleData() {
  const [data, setData] = useState<TNotionDatabase<TSchedule> | null>(null);

  useEffect(() => {
    axios<TNotionDatabase<TSchedule>>(
      `${
        process.env.NODE_ENV === "production"
          ? process.env.REACT_APP_BACKEND_URL
          : process.env.REACT_APP_BACKEND_DEV_URL
      }/schedules`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => setData(null));
  }, []);

  return data;
}

export { useScheduleData };
