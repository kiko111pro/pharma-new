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
