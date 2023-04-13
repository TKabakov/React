const vehicles = ['mustang', 'f-150', 'expedition'];

const [,,suv] = vehicles;

console.log( suv);

const person = {
  name: 'Jesse',
  age: 30, 
  address: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

displayMessage(person)

function displayMessage({ 
address:{state}
 }) {
  const message = 'I live in ' + state + '.';
}

console.log(massage);