function Expression2 (props) {
    return (
        <div>
            <h2>
            The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}
            </h2>
            <p>The value of the main prop is: <em>{props.math}</em></p>
            <p>The value of str is: <em>{props.str}</em></p>
        </div>
    );
};

export default Expression2;