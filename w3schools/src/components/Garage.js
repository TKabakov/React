export default function Garage(props) {
    const cars = props.myCars;
    return (
        <>
        <h1>Garage: { cars }</h1>
        {cars.length > 0 &&
        <h2>
            You have { cars.length } cars in you garage.
        </h2>}
        </>
    );
};