// # Topic: Classes

// ## strictPropertyInitialization
// OK
class GoodGreeter {
  name: string = '';
}
class GoodGreeter2 {
  name: string;
  constructor() {
    this.name = 'hello';
  }
}
class GoodGreeter3 {
  name!: string;
}
// Bad
class BadGreeter {
  // name: string; // Throws error when strictPropertyInitialization flag on
}

// ## readonly
class ReadGreet {
  readonly name: string;
  constructor () {
    this.name = 'foo';
  }
  updateName() {
    // this.name = 'foo'; // Error
  }
}

// ## `this` peculiarities
class MyClass {
  name = 'MyClass';
  getName(this: MyClass) {
    return this.name;
  }
}
const c = new MyClass();
// OK
c.getName();
// Error, would crash
const g = c.getName;
// g(); // The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.

// ## Parameter properties
class Bar {
  constructor (
    public readonly prop1: string,
    protected prop2: number,
    private prop3: boolean,
  ) {}
}
const b: Bar = new Bar('foo', 1, false);
b.prop1;
// b.prop2; // Error
// b.prop3; // Error
