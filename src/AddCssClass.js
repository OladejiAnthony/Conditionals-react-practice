import React,{useState} from "react";
import styles from "./AddC.scss"

//Question: Create a component that login/logout a user on one button click and add css class conditionally
//TERNARY OPERATOR[with Conditional Class name]
//We use this method of Adding Css Classes to Conditionals whenever we need 
//to tie one or more parts/area's in our component or app together with their 
//css-styles simultaneously during state update.

function  AddCssClass () {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  
  const toggleBtn = () => {
    setIsLoggedIn(!isLoggedin);
  }

  return (
    <>
      <div className={isLoggedin ? `${"user"}` : "guest"}>
        {
          isLoggedin ? 
          (<h2>Hello, Tony</h2>) :
          (<h2>Welcome, Guest</h2>)
        }
      </div>
      <button onClick={toggleBtn} className={isLoggedin ? "user" : "guest"}>
        {isLoggedin ? "Logout" : "Login"}
      </button>
    </>
  )
}

export default AddCssClass;
