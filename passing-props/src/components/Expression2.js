//The math prop is there to show that you can add arithmetic operators and numbers inside JSX, and it will be evaluated just like it does in plain JavaScript. 
//The str prop is there to show that you can concatenate strings, as well as strings and variables – which is shown by adding string literals of “ another ” and “string” to the str1 variable.

//function Expression2 (props) {
//   return (
//       <div>
//          <h2>
//                The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}
//           </h2>
//               <p>The value of the main prop is: <em>{props.math}</em></p>
//                <p>The value of str is: <em>{props.str}</em></p>
//        </div>
//   );
//};

function Expression2 ({toggleBoolean, math, str}) {
    return (
        <div>
            <h2>
                The value of the toggleBoolean prop is: {toggleBoolean.toString()}
            </h2>
                <p>The value of the main prop is: <em>{math}</em></p>
                <p>The value of str is: <em>{str}</em></p>
        </div>
    );
};

export default Expression2;