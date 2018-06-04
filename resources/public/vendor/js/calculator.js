var calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  }
};

// module.exports = calculator;

export const add = function (a, b) {
  return a + b
}
export const subtract = function (a, b) {
  return a - b
}

