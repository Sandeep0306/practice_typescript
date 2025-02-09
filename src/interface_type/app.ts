// interface example and type example
interface userDetails {
      name: string;
      age: number;
      email: string;
}

const user: userDetails = {
      name: "Sandeep",
      age: 19,
      email: "OgTlI@example.com"
}

function greet1(user: userDetails) {
      return `Hello ${user.name} and your age is ${user.age}`;
}

console.log(greet1(user));

// interface can be extended
interface userExtended extends userDetails {
      isAdmin: boolean;
}

const user1: userExtended = {
      name: "Sandeep",
      age: 19,
      email: "OgTlI@example.com",
      isAdmin: true
}

const greet3 = (user: userExtended) => {
      return `Hello ${user.name} and your email is ${user.email}`;
}

console.log(greet3(user1));

// type can work with union and intersection
type User2 = {
      name: string;
      age: number;
      email: string;
}

let greet2 = (user: User2) => {
      console.log(`Hello ${user.name}`);
}

console.log(greet2({
      name: "Sandeep",
      age: 19,
      email: "OgTlI@example.com"
}));

// example of union type but in interface it is not possible
type stringOrNumber = string | number;

const printValue = (val: stringOrNumber) => {
      return `Hello ${val}`;
}

console.log(printValue(10));

// example of intersection type but in interface it is not possible
type person = {
      name: string;
      age: number;
}

type employee = {
      name: string;
      department: string;
}

type teamLead = person & employee;

const lead: teamLead = {
      name: "Sandeep",
      age: 19,
      department: "Engineering"
}

console.log(lead);

