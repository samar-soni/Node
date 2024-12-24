//We are going to learn about the npm library
const _ = require('lodash');
const item1 = [1,[2,[3,[4]]]];
// const item2 = {4: 5: 67};

const newItems = _.flattenDeep(item1);
console.log(newItems);
// const merged = _.merge(item1.item2);
// console.log(merged);

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = _.merge(obj1, obj2);
console.log(merged); // { a: 1, b: 2 }


