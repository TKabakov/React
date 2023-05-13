import Car from './components2/Car';

export default function Garage (props){
    const cars = props.myCars;
    return (
        <>
        <h1>Who lives in my garage?</h1>
        <ul>
            {cars.map((carCar) => <Car make = {carCar}/>)}
        </ul>
        </>
    );
};