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

//Destructing objects
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type, brand, color, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + ' . '; 
  console.log(message);
}

//Destructing a nested object
const vehicleTwo = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

vehicle(vehicleTwo);

function vehicle({type, registration: {state}}) {
  const message2 = 'My ' + type + ' has a ' + state + ' registration . '; 
  console.log(message2);
}




