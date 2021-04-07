// creating an object in javascript
// let newObject = {}; // or
// let newObject = Object.create(null); //or
let newObject = new Object();

/*four ways key-value pair be assigned to an object*/

//1.Dot syntax
newObject.someKey = "Hello World";

//2.Square bracket syntax
newObject["someKey"] = "Hello World";

//3.Object.defineProperty
Object.defineProperty(newObject, "someKey", {
  value: "for more control of the property's behavior",
  writable: true,
  enumerable: true,
  configurable: true,
});
// shorthand
function defineProp (obj, key, value) {
  let config = {}
  config.value = value;
  Object.defineProperty(obj, key, config);
}
// create a new empty object

let man = Object.create(null);
// populate the object with properties
defineProp(man, "car", "Toyota")
defineProp(man, "dob", 1981)
defineProp(man, "beard", false)

//4.Object.defineProperties
Object.defineProperties(newObject,{
  "someKey":{
    value: "this is the first key",
    writable: true,
  },
  "anotherKey":{
    value: "this is the second key",
    writable: false,
  }
})

// can also be used for inheritance, such as
let driver = Object.create(man)
defineProp(driver, "topSpeed", "100mph")
console.log(driver["topSpeed"])
