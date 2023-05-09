//Arrow functions
let hello = function() {
    return "Hello World!";
  }

  console.log(hello());

  let hello2 = () => {
    return "Hello World!"
  }

  console.log(hello2());

let hello3 = () => "Hello World!";

console.log(hello3());

let hello4 = (val) => "Hello" + val;
console.log(hello4(" World!"));

//Destructing 
function calculate (a,b) {
  const add = a + b;
  const substract = a -b;
  const multiplay = a * b;
  const divide = a / b;

  return [add, substract, multiplay, divide]
}

const [add, substract, multiplay, divide] = calculate(5,8);
console.log("Sum: " + add);
console.log("Substarct: " + substract);
console.log("Multiplay: " + multiplay);
console.log("Divide: "+ divide);


