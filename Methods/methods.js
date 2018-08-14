// In Javascript a method is a function passed to an object as data type
// Example Object

let obj = {
    name: "Matteo",
    age: 2000,
    isCool: false,
    friends: ["bob", "mark", "jamie"],
    add: function(x,y){ // <- this is a method
        return x+y;
    }
}
obj.add(5,10);