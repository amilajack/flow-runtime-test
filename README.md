
This is a temporary testing repo to serve as a debugging example for flow-runtime
Intended to help work on a fix for https://github.com/codemix/flow-runtime/issues/149

### Tips

[![Greenkeeper badge](https://badges.greenkeeper.io/amilajack/flow-runtime-test.svg)](https://greenkeeper.io/)

* Look for where Component types are mapped to flow-runtime calls

### Possible areas to investigate
* `makeReactPropTypes.js`
* `isReactComponentClass()`
* `firstPassVisitors.js`
* `transformVisitors.js`
* `'reactComponentClass'`
* https://github.com/codemix/flow-runtime/blob/master/packages/babel-plugin-flow-runtime/src/transformVisitors.js#L649-L663
* `superTypeParameters[1]` gets `State` instead of `Props`. Should this be `superTypeParameters[0]`?
* `babel-plugin-flow-runtime` seems to transform correctly. The issue is probably in `flow-runtime`.
* Check to see if `flow-typed` defs are up to date
* Inspect the transpiled babel code of a react component

### Setup
```bash
git clone git@github.com:amilajack/flow-runtime-test.git
cd flow-runtime-test
npm run build
```
