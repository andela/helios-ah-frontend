/**
 * reverses scrambled token
 * @param {string} token - scrambled token
 * @returns {output} - unbscrambled data
 */
const reverseToken = token => token.split('').reverse().join('');

export default reverseToken;
