export type TSchedule = {
  time: number;
  hour: number;
  place: string;
  title: string;
  location: string;
  team: string;
};

export type TSchedules = {
  [key: number]: TSchedule[];
};

export type TDate = {
  time: number;
  date: number;
  day: number;
};

export type TDateCard = {
  date: number;
  day: number;
  schedule?: TSchedule[];
};
