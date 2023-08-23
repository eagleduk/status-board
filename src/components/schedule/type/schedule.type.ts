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
