import React from 'react'

const Button = ({ children, ...rest }) => (
    <button onClick={() => console.log("ButtonClick")} {...rest}>
      {children}
    </button>
  );
  
  const withClick = (Component) => {
    const handleClick = () => {
      console.log("WithClick");
    };
  
    return(props) => {
      return<Component {...props} onClick={handleClick} />;
    };
  };
  
  const MyButton = withClick(Button);
  
  export default function Exam1() {
    return <MyButton onClick={() => console.log("AppClick")}>Submit</MyButton>;
  }