//Function declaration:

function Example2() {
    return (
        <div className="heading">
            <h1>Here's a random number from 0 to 10:
                { Math.floor(Math.random() *10 ) +1}
            </h1>
        </div>
    );
};

export default Example2;