import { api } from "../features/service.common";

/**
 *
 * @param {string} str String to truncate
 * @param {number} num Maximum words to display
 * @returns object Truncates String
 */
export const truncateString = (str, num) => {
  return {
    truncatedString: str.substring(0, num),
    isTruncated: str.substring().length > num, //To decide if we need to display "Read More +" button after text
  };
};

export const fullImageUrl = (str) => api + "/" + str;

// "data": {
//   "peopleRated": 3,
//   "oneStar": 0,
//   "twoStar": 0,
//   "threeStar": 0,
//   "fourStar": 0,
//   "fiveStar": 3
// },
export const rating = (data) => {
  const totalOneStar = data.oneStar * 1;
  const totalTwoStar = data.twoStar * 2;
  const totalthreeStar = data.threeStar * 3;
  const totalFourStar = data.fourStar * 4;
  const totalFiveStar = data.fiveStar * 5;
  const totalStars =
    totalOneStar +
    totalTwoStar +
    totalthreeStar +
    totalFourStar +
    totalFiveStar;
  return (totalStars / data.peopleRated).toFixed(1);
};
