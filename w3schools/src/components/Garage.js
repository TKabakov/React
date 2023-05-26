export default function Garage() {

    const cars = ["Ford", "BMW", "Audi", "Toyota"];

    return (
        <>
        <h1>Garage: { cars }</h1>
        {cars.length > 0 &&
        <h2>
            You have { cars.length } cars in you garage.
        </h2>}
        </>
    );
}