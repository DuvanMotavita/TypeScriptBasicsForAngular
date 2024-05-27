export class Person {
  // public name: string;
  // private address: string;

  constructor(
    public firtsName: string,
    public lastName: string,
    private address: string = "No address"
  ) {
    // this.name = name;
    // this.address = address;
  }
}

export class Hero /*extends Person*/ {
  // public person: Person;
  constructor(
    public alterEgo: String,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    //super(realName, "New York");
    //this.person = new Person(realName);
  }
}
const tony = new Person("Tony", "stark", "New York");
const ironman = new Hero("Ironman", 45, "Tony", tony);

console.log(ironman);
