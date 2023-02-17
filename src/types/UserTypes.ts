export type TUserMainData = {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  todayScore: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
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

export type TUserPerformance = {
  userId: number;
  kind: {
    1: 'cardio';
    2: 'energy';
    3: 'endurance';
    4: 'strength';
    5: 'speed';
    6: 'intensity';
  };
  data: TData[];
};
