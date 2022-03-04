// ## Gotcha: By default, TS doesn't account for undefined when using an index signature

// ### Notes
// ### Accessing an array item (e.g. arr[0]) may return undefined.
// ### However, even with strictNullChecks turned on, TS doesn't account for this

// ## Options
// ### (Preferred) Option #1: Turn on noUncheckedIndexedAccess flag
// ### Option #2: Manually union index signatures with undefined
// ### Option #3: Use only index-safe structures, e.g. for (let i = 0; i < arr.length; i++)

type Foo = { foo: string; }

function getFirstElement(arr: Foo[]) {
  return arr[0];
}
const f = getFirstElement([]); // type is `Foo | undefined` with noUncheckedIndexedAccess, `Foo` otherwise
// f.foo; // throws error
f?.foo; // OK
