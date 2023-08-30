export type TSchedule = {
  time: number;
  hour: number;
  place: string;
  title: string;
  location: string;
  team: string | undefined;
  isHome: boolean;
};

export type TSchedules = {
  [key: number]: TSchedule[];
};

export type TScheduleItem = {
  item: TSchedule;
};

export type TNotionDatabase<T> = {
  results: T[];
  object: string;
  next_cursor?: null;
  has_more?: boolean;
  type?: "string";
  page_or_database?: any;
  developer_survey?: "string";
};
