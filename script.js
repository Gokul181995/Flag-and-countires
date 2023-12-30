// Two obj comparsion

let obj1 = { name: "person", age: 5 };
let obj2 = { age: 5, name: "person" };
// console.log(obj1, obj2);
function areobjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;

    for (let key of keys1) {
      if (obj1[keys1] !== obj2[keys2]) {
        return false;
      }
    }
  }
  return true;
}

console.log(areobjectsEqual(obj1, obj2));
