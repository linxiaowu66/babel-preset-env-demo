'use strict';

const mod = require('./module.js');

mod.testAsync();

mod.testBuiltInMethods();

try {
  throw new mod.error('检测到错误');
} catch (err) {
  console.log(err);
}