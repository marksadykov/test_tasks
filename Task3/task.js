/**
 * Является ли строка палиндромом
 * @param  {string}  value
 * @return {boolean}
 */
function isPalindrome(value) {
    return (value
            .replace(/\s+/g, '')
            .toLocaleLowerCase()
        === value
            .split('')
            .reverse()
            .join('')
            .replace(/\s+/g, '')
            .toLocaleLowerCase()
    );
}

export default isPalindrome;
