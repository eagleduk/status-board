import axios from "axios";
import { useState, useEffect } from "react";
import { TNotionDatabase, TSchedule } from "../type/schedule.type";

function useScheduleData() {
  const mode = process.env.NODE_ENV;
  const [data, setData] = useState<TNotionDatabase<TSchedule> | null>(null);

  useEffect(() => {
    console.log(process.env.REACT_APP_BASE_URL);
    axios<TNotionDatabase<TSchedule>>(
      `${process.env.REACT_APP_BASE_URL}/schedules`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => setData(null));
  }, [mode]);

  return data;
}

export { useScheduleData };
