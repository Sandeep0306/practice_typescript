// interface is different from type as it can be extended
interface User {
      name: string,
      age: number,
      isLegal: () => boolean;
}

class Person implements User {
      constructor(public name: string, public age: number) { }
      // function keyword is not used in the method
      isLegal() {
            if (this.age >= 18) {
                  return true;
            }
            else return false;
      }
}

let person = new Person("Sandeep Biswal", 22);

const legal: boolean = person.isLegal();
console.log(legal);

/* interface is almost same as abstract class but there are some differences between them  
like you can provide implementation of the method in abstract class but not in interface */
abstract class User1 {
      name: string;
      age: number;
      constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
      }
      greet() {
            return `Hello, my name is ${this.name}`;
      };
}

class Manager extends User1 {
      constructor(name: string, age: number) {
            super(name, age);
      }
      greet(): string {
            return `Hello, my name is ${this.name} and I am a manager`;
      }
}

let manager = new Manager("Sandeep Biswal", 22);
console.log(manager.greet());