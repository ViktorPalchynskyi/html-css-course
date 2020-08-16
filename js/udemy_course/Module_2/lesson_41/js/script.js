"use strict";

const log = function (a, b, ...rest) {
   console.log(a, b, rest);
};

log(4, 2, 11, 242, 412, 421, 222);

function calcOrDouble(number, basis = 2) {
   console.log(number * basis);
}

calcOrDouble(3);