// # Topic: Function compatibility

// ## Lesson
// ## Function compatibility is determined by the number / order of params AND the return type

// ## Notes:
// ## When comparing fn2 with fn1,
// ## Assuming param types are in correct order and return types are equal:
// ## Same number of params is OK
// ## Fewer params is OK
// ## More params is Not OK

// ## Examples: Overloads
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
// OK
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// Not OK
// const d3 = makeDate(1, 3); // Err

// ## Lesson
// ## An optional property means the function can be invoked without the property
// ## Provide defaults when optional properties and overloads are mixed

type SyncHandler = (result: string) => void;
type Syncable = {
  sync(): Promise<string>;
  sync(cb: SyncHandler): void;
  sync(cb?: SyncHandler): void | Promise<string>;
};
const sync_obj: Syncable = {
  // OK
  sync: async function (r: SyncHandler = defaultCallback) {
    const val = '';
    r(val);
    return val;
  },
  // Not OK
  // sync: async function (r) { return '' }, // Err because callers need to be able to run the function without passing a param
};
function defaultCallback(s: string) {
  console.log(s);
}
