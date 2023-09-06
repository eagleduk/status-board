export type TSchedule = {
  time: number | null;
  hour: number | null;
  place: string | null;
  title: string | null;
  location: string | null;
  team: string | null;
  isHome: boolean;
  id: string;
};

export type TSchedules = {
  [key: number]: TSchedule[];
};

export type TScheduleItem = {
  item: TSchedule;
};

export type TNotionDatabase<T> = {
  [key: string]: T[];
  // results: T[];
  // object: string;
  // next_cursor?: null;
  // has_more?: boolean;
  // type?: "string";
  // page_or_database?: any;
  // developer_survey?: "string";
};
