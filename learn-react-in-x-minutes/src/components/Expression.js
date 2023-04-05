//You can pass almost any expression as a props.



function Expression (props) {
    return (
        <h2> The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
    );
};

export default Expression;