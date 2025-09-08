
function receivesAFunction(callback) {
  callback();
}
function returnsANamedFunction() {
  return function namedFn() {
    return "I am a named function";
  };
}


function returnsAnAnonymousFunction() {
  return function() {
    return "I am an anonymous function";
  };
}


