//map object holds key value pairs and remembers the origin insertion
//order of the keys
//any value (objects and primitive values) may be used as a key or a value
//map is a DS that also exists in other programming languages

//showing why maps are needed :

const myMap = new Map([
  [{}, "a"],
  [{}, "b"],
]);

//using set we  can assign key value pairs

myMap.set({}, 'c');

//myMap.delete(1); deletes b specific key

//myMap.clear()

//has and size are same as size 

console.log(myMap);

//map keeps track of both key objects
