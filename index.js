import dd from './Task1/task.js';
import myMap from "./Task2/task.js";
import isPalindrome from "./Task3/task.js";

//Task 2 demo
const customMap = new myMap([['rthlkj', 1],['wewndkjwne', 5]]);
customMap.set('hjkjh', 'test1');
customMap.set('op[o[p', 'test2');
console.log(customMap.get('hjkjh'));
console.log(customMap.has('hjkjh'));
console.log(customMap.delete('hjkjh'));
console.log(customMap.size());
console.log(customMap.set('kjhkjhk', 'ahha'));
console.log(customMap.size());
console.log(customMap.set('kjhkjhk', 'llllla'));
console.log(customMap.size());
console.log(customMap.keys());
console.log(customMap.values());
console.log(customMap.entries());
console.log(customMap.clear());
console.log(customMap.size());

//Task 3 demo
console.log(isPalindrome('abcd')); // false
console.log(isPalindrome('A man a plan a canal Panama')); // true
console.log(isPalindrome('') === true);
console.log(isPalindrome('abcdcba') === true);
console.log(isPalindrome('abcd') === false);
console.log(isPalindrome('...') === true);


