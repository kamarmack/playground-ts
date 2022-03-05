# ts-playground

Playground created while reviewing the [TypeScript handbook](^1)

#### Generate js code

```console
tsc
```

#### Helpful flags

###### esModuleInterop

By default (with esModuleInterop `false`) TypeScript treats CommonJS/AMD/UMD modules similar to ES6 modules.

<u>Issue</u>

The ES6 modules spec states a namespace import can only be an object. However, CommonJS allows an import to be treated as a function and be callable.

To fix these errors turn the esModuleInterop flag on.

<u>Reference</U>

- ES6 namespace import `import * as moment from "moment"`
- CommonJS import `const moment = require("moment")`
- ES6 default import `import moment from "moment"`
- CommonJS default import `const moment = require("moment").default`

###### moduleResolution
Values: `'node' | 'classic'`
`node` option checks node_modules folders
###### noEmitOnError
###### noImplicitAny
###### noUncheckedIndexedAccess
- See [example gotcha](/gotchas/indexed-access.ts)
###### sourceMap
###### strictNullChecks
###### strictPropertyInitialization
###### traceResolution (use as compiler flag instead of config file)
Provides insight in what happened during the module resolution process.
```console
tsc --traceResolution
```

[^1]:https://www.typescriptlang.org/docs/handbook/intro.html
