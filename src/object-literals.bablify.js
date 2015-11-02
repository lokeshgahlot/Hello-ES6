console.log('********** Enhanced  Object literals ************');
var handler = {};

var obj = {
  // __proto__
  __proto__: {},
  // Shorthand for ‘handler: handler’
  handler,
  // Methods
  toString() {
    // Super calls
    return "d " + super.toString();
  },
  // Computed (dynamic) property names
  [ 'prop_' + (() => 42)() ]: 42
};
