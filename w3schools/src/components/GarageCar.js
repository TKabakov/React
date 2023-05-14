import Car from './components2/Car';

export default function Garage (){
    const cars = ["Ford", "BMW", "Audi", "Toyota"];


    return (
        <>
        <h1>Who lives in my garage?</h1>
        <ul>
            {cars.map((carCar) => <Car make = {carCar}/>)}
        </ul>
        </>
    );
};