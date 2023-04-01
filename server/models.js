const {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} = require('./data');

/**
 * @description Retrieve the main user info (first name, last name, today score)
 * @param {number} id
 */
const getUserById = (id) => USER_MAIN_DATA.find((user) => user.id === id);

/**
 * @param {number} id
 */
const getUserActivityById = (id) =>
  USER_ACTIVITY.find((userActivity) => userActivity.userId === id);

/**
 * @param {number} id
 */
const getUserAverageSession = (id) =>
  USER_AVERAGE_SESSIONS.find((userActivity) => userActivity.userId === id);

/**
 * @param {number} id
 */
const getUserPerformance = (id) =>
  USER_PERFORMANCE.find((userPerformance) => userPerformance.userId === id);

module.exports = {
  getUserById,
  getUserActivityById,
  getUserAverageSession,
  getUserPerformance,
};
