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