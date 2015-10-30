
function() {
  export function sum(x, y) {
  return x + y;
  }
  export var pi = 3.141593;


  import * as math from "lib/math";
  alert("2π = " + math.sum(math.pi, math.pi));


  import {sum, pi} from "lib/math";
  alert("2π = " + sum(pi, pi));
};

