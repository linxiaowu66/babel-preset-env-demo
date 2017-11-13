'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require('core-js/modules/es6.typed.array-buffer');

require('core-js/modules/es6.typed.int8-array');

require('core-js/modules/es6.typed.uint8-array');

require('core-js/modules/es6.typed.uint8-clamped-array');

require('core-js/modules/es6.typed.int16-array');

require('core-js/modules/es6.typed.uint16-array');

require('core-js/modules/es6.typed.int32-array');

require('core-js/modules/es6.typed.uint32-array');

require('core-js/modules/es6.typed.float32-array');

require('core-js/modules/es6.typed.float64-array');

require('core-js/modules/es6.map');

require('core-js/modules/es6.set');

require('core-js/modules/es6.weak-map');

require('core-js/modules/es6.weak-set');

require('core-js/modules/es6.promise');

require('core-js/modules/es6.symbol');

require('core-js/modules/es6.function.name');

require('core-js/modules/es6.array.from');

require('core-js/modules/es7.object.values');

require('core-js/modules/es7.object.entries');

require('core-js/modules/es7.object.get-own-property-descriptors');

require('core-js/modules/es7.string.pad-start');

require('core-js/modules/es7.string.pad-end');

const pr = () => {
  return new Promise((resolve, reject) => {
    resolve('promise fullfilled');
  });
};
module.exports = {
  error: function error(message) {
    this.name = 'linxiaowu';
    this.message = message || 'Something oops....';
    this.type = 'customeErrorType';
    this.stack = new Error().stack;
  },
  testAsync: function testAsync() {
    return _asyncToGenerator(function* () {
      const res = yield pr();
      console.log(res);
    })();
  },
  testBuiltInMethods: function testBuiltInMethods() {
    console.log([1, 2, 4].includes(1));
    console.log([1, 2, 4].find(el => el >= 2));
  }
};

// module.exports = () => {

// }