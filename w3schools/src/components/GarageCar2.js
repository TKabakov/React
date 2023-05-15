import Car2 from './components2/Car2';

export default function Garage (){
    const cars2 = [
        {id: 1, brand: "Toyota", model: "Avensis" },    
        {id: 2, brand: "Mercedese", model: "CLK"},    
        {id: 3, brand: "BMW", model: "M3"},
      ];
    return (
        <>
        <h1>Who lives in my garage?</h1>
        <ul>
            {cars2.map((car) => <Car2 key={ car.id } brand = { car.brand } model = { car.model } />)}
        </ul>
        </>
    );
};