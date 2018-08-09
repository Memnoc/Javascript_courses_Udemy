// Objects in Javascript are similar to objects in Java
// They model an element

let person = {
    name: "Mike",
    age: 30,
    phone: 12345677
};

console.log(person.name);
console.log(person.age);
console.log(person.phone);

// Edit/update object
person.name = "Matteo";

console.log(person.name);

person["name"] = "Claudio";

console.log(person.name);

// Array containing objects

let posts = [
    {
        title: "What the heck",
        author: "Matteo"
    },
    {
        title: "In the neck",
        author: "It's you"
    }
]

console.log(posts[0]);
console.log(posts[1]);

// Embedding array of comments inside each posts object

let posts2 = [
    {
        title: "What the heck",
        author: "Matteo",
        comments: ["Terrible posts", "Mediocre post"] // key:comments value:array
    },
    {
        title: "In the neck",
        author: "It's you",
        comments: ["I like this more", "Cool post"]
    }
]

// To access the values in the array
console.log(posts2[1].comments[1]); // -> Cool post: posts[1] is the second object - comments[1] is the second index of the array

var someObject = {
    friends:[
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"},
    ],
    color: "baby blue",
    isEvil: true
};

console.log(someObject.friends[0]);