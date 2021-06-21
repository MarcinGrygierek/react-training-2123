function foo(...args) {
  console.log(args);
}

function bar(a, b, c, d, ...args) {
  console.log(a, b, c, d, args);
}
