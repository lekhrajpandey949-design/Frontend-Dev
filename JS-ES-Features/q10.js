function outer() {
  console.log(count);
  var count = 5;
  function inner() {
    console.log(count);
    var count = 10;
  }
  inner();
}
outer();

function outerFixed() {
  console.log(typeof count === "undefined" ? "undefined" : count);
  var count = 5;
  const inner = () => {
    console.log(count);
    let countInner = 10;
    console.log(countInner);
  };
  inner();
}
outerFixed();
debugger;
