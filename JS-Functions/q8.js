Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) result[i] = callback(this[i], i, this);
  }
  return result;
};

console.log([1, 2, 3].myMap(n => n * 2));
