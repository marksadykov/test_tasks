import dd from './Task1/task.js';
import myMap from "./Task2/task.js";
import isPalindrome from "./Task3/task.js";


var map1 = new myMap();

map1.set('0', 'foo');
map1.set('1', 'bar');
console.log(map1.get('1'));
console.log(map1.has('1'));
console.log(map1.delete('1'));
console.log(map1.size());
console.log(map1.set('2', 'ahha'));
console.log(map1.size());
console.log(map1.keys());
console.log(map1.values());
console.log(map1.entries());
console.log(map1.clear());
console.log(map1.size());


console.log(isPalindrome('A man a plan a canal Panama'));


