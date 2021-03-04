/**
 * Является ли строка палиндромом
 * @param  {string}  value
 * @return {boolean}
 */
function isPalindrome(value) {
    return value.replace(/\s+/g, '').toLocaleLowerCase().reverse();
}

export default isPalindrome;
