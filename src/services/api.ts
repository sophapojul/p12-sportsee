import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './mockedData';

const isLocalData = `${process.env.REACT_APP_LOCAL_DATA}`;

/**
 * Download data from api
 * @param userId - user id
 * @returns user information data
 */
export async function getUserInfos(userId: string) {
  if (isLocalData === 'true') {
    const data = USER_MAIN_DATA.find((user) => user.id === Number(userId));
    return data?.userInfos;
  }
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/${userId}`);
    const { data } = await res.json();
    if (res.ok) {
      return data.userInfos;
    }
    // server error
    throw new Error(`${data.error.message}`);
  } catch (err) {
    // fetch error
    throw new Error(`${err}`);
  }
}

/**
 * Download score data from api
 * @param userId - user id
 * @returns main user data
 */
export async function getTodayScore(userId: string) {
  if (isLocalData === 'true') {
    const data = USER_MAIN_DATA.find((user) => user.id === Number(userId));
    return data?.todayScore || data?.score;
  }
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/${userId}`);
    const { data } = await res.json();
    if (res.ok) {
      return data.todayScore || data.score;
    }
    // server error
    throw new Error(`${data.error.message}`);
  } catch (err) {
    // fetch error
    throw new Error(`${err}`);
  }
}

/**
 * Download key data from api
 * @param userId - user id
 * @returns key user data
 */
export async function getKeyData(userId: string) {
  if (isLocalData === 'true') {
    const data = USER_MAIN_DATA.find((user) => user.id === Number(userId));
    return data?.keyData;
  }
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/${userId}`);
    const { data } = await res.json();
    if (res.ok) {
      return data.keyData;
    }
    // server error
    throw new Error(`${data.error.message}`);
  } catch (err) {
    // fetch error
    throw new Error(`${err}`);
  }
}

/**
 * Download user activity data from api
 * @param userId - user id
 * @returns user activity data
 */
export async function getUserActivity(userId: string) {
  if (isLocalData === 'true') {
    const data = USER_ACTIVITY.find((user) => user.userId === Number(userId));
    return data?.sessions;
  }
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/${userId}/activity`
    );
    const { data } = await res.json();

    if (res.ok) {
      return data.sessions;
    }
    // server error
    throw new Error(`${data.error.message}`);
  } catch (err) {
    // fetch error
    throw new Error(`${err}`);
  }
}

/**
 * Download user performance data from api
 * @param userId - user id
 *  @returns user performance data
 */
export async function getUserPerformance(userId: string) {
  if (isLocalData === 'true') {
    const data = USER_PERFORMANCE.find(
      (user) => user.userId === Number(userId)
    );
    return data;
  }
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/${userId}/performance`
    );
    const { data } = await res.json();
    if (res.ok) {
      return data;
    }
    // server error
    throw new Error(`${data.error.message}`);
  } catch (err) {
    // fetch error
    throw new Error(`${err}`);
  }
}

/**
 * Download average user sessions data from api
 * @param userId - user id
 * @returns average user sessions data
 */
export async function getUserAverageSessions(userId: string) {
  if (isLocalData === 'true') {
    const data = USER_AVERAGE_SESSIONS.find(
      (user) => user.userId === Number(userId)
    );
    return data?.sessions;
  }
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/${userId}/average-sessions`
    );
    const { data } = await res.json();
    if (res.ok) {
      return data.sessions;
    }
    // server error
    throw new Error(`${data.error.message}`);
  } catch (err) {
    // fetch error
    throw new Error(`${err}`);
  }
}
