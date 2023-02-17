type TUserInfos = {
  firstName: string;
  lastName: string;
  age: number;
};

type TKeyData = {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
};

export type TUserMainData = {
  id: number;
  userInfos: TUserInfos;
  todayScore: number;
  keyData: TKeyData;
};

type TSessionsAct = {
  day: string;
  kilogram: number;
  calories: number;
};

export type TUserActivity = {
  userId: number;
  sessions: TSessionsAct[];
};

type TSessionsAvr = {
  day: number;
  sessionLength: number;
};

export type TUserAverageSessions = {
  userId: number;
  sessions: TSessionsAvr[];
};

export type TData = {
  value: number;
  kind: number;
};

const kind = {
  1: 'cardio',
  2: 'energy',
  3: 'endurance',
  4: 'strength',
  5: 'speed',
  6: 'intensity',
} as const;

export type TUserPerformance = {
  userId: number;
  kind: typeof kind;
  data: TData[];
};
