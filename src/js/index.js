
const clpp = {};
clpp.utils = {};
clpp.utils.math = {};

// Checking if GCC will allow me to access properties of null/undefined
// without a warning.


/**
 * @param {number} value
 * @return {number}
 */
clpp.utils.math.identity = function (value) {
  return value;
};

/**
 * e.g. access null and return
 * @param {?Array} value
 * @return {number}
 */
clpp.utils.math.getLength = function (value) {
  return value.length; // Should fail to compile
};

/**
 * e.g. access undefined and return
 * @param {!Array=} value
 * @return {number}
 */
clpp.utils.math.getLength2 = function (value) {
  return value.length; // Should fail to compile
};

/**
 * e.g. access null and return
 * @param {(!Array|null)} value
 * @return {number}
 */
clpp.utils.math.getLength3 = function (value) {
  return value.length; // Should fail to compile
};

/**
 * e.g. access null and return
 * @param {?{x: number}} value
 * @return {number}
 */
clpp.utils.math.getX = function (value) {
  return value.x; // Should fail to compile
};

/**
 * e.g. access null and pass down
 * @param {?{x: number}} value
 * @return {number}
 */
clpp.utils.math.getX2 = function (value) {
  return clpp.utils.math.identity(value.x); // Should fail to compile
};

/**
 * e.g. destructure
 * @param {?{x: number}} value
 * @return {number}
 */
clpp.utils.math.getX3 = function (value) {
  const {x} = value; // Should fail to compile
  return x;
};
