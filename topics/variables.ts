// # Topic: Variable declaration

// ## Assignments, type inference

// ### OK
const foo = 'foo';
const obj = {
  foo,
  bar: 1,
  boo: [1, true],
  far: null,
};
let { foo: oof, ...junk } = obj;
junk.bar;
const { boo } = junk;
let [fir, sec] = boo;
[sec, fir] = [fir, sec];
({ oof } = { oof: foo });
// ### Error
// delete obj.far; // The operand of a 'delete' operator must be optional.

// ## Default values in funcs
type Obj = {
  a?: string;
  b?: number;
};
type ObjFactory = (p?: Obj) => void;
const default_obj: Obj = {};

// ### Consuming parameter as an entire object
const f1: ObjFactory = function (p = default_obj) {
  const { a: a_req = '', b: b_req = 1 } = p;
  // ### OK
  a_req.toLowerCase();
  b_req.toExponential();
  // ### OK
  const { a: a_op, b: b_op } = p;
  a_op?.toLowerCase();
  b_op?.toExponential();
  // ### strictNullChecks Error
  // let { a, b } = p;
  // a.toLowerCase();
  // b.toExponential();
}
f1();

// ### Consuming parameter properties by destructuring
const f2: ObjFactory = function ({ a = 'foo', b = 0 } = default_obj) {
  // ### OK
  a.toLowerCase();
  b.toExponential();
}
f2();

// ### Consuming parameter properties by destructuring, more complex with some obj properties required
type ObjReqA = Obj & Concrete<Pick<Obj, 'a'>>;
type ObjFactoryReqA = (p?: ObjReqA) => void;
const default_obj_req_a: ObjReqA = { a: 'foo' };
const f3: ObjFactoryReqA = function ({ a, b = 0 } = default_obj_req_a): void {
  // ### OK
  a.toLowerCase();
  b.toExponential();
  // ### strictNullChecks Error
  // a.toLowerCase();
}
// ### OK
f3({ a: 'foo' }); // -> default parameter b = 0
f3(); // -> default obj = { a: "" } -> causes default parameter b = 0
// ### Error
// f3({ }); // `a` is required if you supply an argument
