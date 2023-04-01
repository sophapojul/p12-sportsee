interface IUserInfos {
  firstName: string;
  lastName: string;
  age: number;
}

interface IKeyData {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
}

interface IActivity {
  day: string;
  kilogram: number;
  calories: number;
}

interface ISessionsAverage {
  day: number;
  sessionLength: number;
}

interface ISessionsAverageDayStr {
  day: string;
  sessionLength: number;
}

interface IPerformanceData {
  [key: number]: string;
}

interface IPerformance {
  value: number;
  kind: number;
}

interface IUserMainData {
  id: number;
  userInfos: IUserInfos;
  score?: number;
  todayScore?: number;
  keyData: IKeyData;
}

interface IUserActivityData {
  userId: number;
  sessions: IActivity[];
}

interface IUserSessionsAverageDayStrData {
  userId: number;
  sessions: ISessionsAverageDayStr[];
}

interface IUserSessionsAverageData {
  userId: number;
  sessions: ISessionsAverage[];
}

interface IUserPerformanceData {
  userId: number;
  kind: IPerformanceData;
  data: IPerformance[];
}

interface Kind {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}

const kindValues = {
  1: 'cardio',
  2: 'energy',
  3: 'endurance',
  4: 'strength',
  5: 'speed',
  6: 'intensity',
} as const;

export {
  IUserInfos,
  IKeyData,
  IUserMainData,
  IUserActivityData,
  IActivity,
  ISessionsAverage,
  ISessionsAverageDayStr,
  IUserSessionsAverageDayStrData,
  IUserSessionsAverageData,
  Kind,
  kindValues,
  IPerformance,
  IUserPerformanceData,
};

export type ErrorPageProps = {
  message: string;
  status: number;
};
