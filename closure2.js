function add(x) {
    return function(y) {
      return x + y  
    }
}

var addnum = add(3)
console.log(addnum(10));

console.log(add(10)(15));