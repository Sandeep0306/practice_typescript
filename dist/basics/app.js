"use strict";
let a = "Sandeep Biswal";
a = 2002;
console.log(a);
function printName(name) {
    console.log(name);
}
printName("Sandeep Biswal");
const add = (a, b) => {
    return a + b;
};
// automatically infered the return type as number
console.log(add(10, 28));
function delayPrint(func) {
    setTimeout(func, 1000);
}
delayPrint(() => {
    console.log("Hello Sandeep");
});
let greet = (user) => {
    console.log("hello" + user.name);
};
greet({ name: "Sandeep", age: 19, email: "OgTlI@example.com" });
function sum(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(sum(10, 20));
