let a: string | number = "Sandeep Biswal";
a = 2002;
console.log(a);

function printName(name: string): void {
      console.log(name);
}

printName("Sandeep Biswal");

const add = (a: number, b: number) => {
      return a + b;
}
// automatically infered the return type as number
console.log(add(10, 28));

function delayPrint(func: () => void) {
      setTimeout(func, 1000)
}

delayPrint(() => {
      console.log("Hello Sandeep");
})

// type and interface are almost same but there are some differences

// type userTypes = {
//       name: string,
//       age: number,
//       email: string
// }

interface userTypes {
      name: string,
      age: number,
      email: string
}
let greet = (user: userTypes) => {
      console.log("hello" + user.name);
}

greet({ name: "Sandeep", age: 19, email: "OgTlI@example.com" });

// type can work with union and intersection
type a = string | number;
type b = string & number;

type sumInput = string | number;

/* function sum2(a: sumInput, b: sumInput) {
      return a + b; // giving me an error because it can be a string also
} */

function sum(a: sumInput, b: sumInput) {
      if (typeof a === "string" || typeof b === "string") {
            return a.toString() + b.toString();
      }
      return a + b;
}

console.log(sum(10, 20));