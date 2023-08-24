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
