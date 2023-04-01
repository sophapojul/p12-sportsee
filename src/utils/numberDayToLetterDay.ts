/**
 * Function to convert a number representing a day of the week to an array of the first letter of the day of the week in capital letters
 * @param dayNumber - number representing the day of the week
 * @returns array of the first letter of the day of the week in capital letters
 */
function numberDayToLetterDay(dayNumber: number) {
  return ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D'][dayNumber];
}
export default numberDayToLetterDay;
