import React,{useState} from "react"

//Create a component that login/logout a user at button click(2btn's)
//Ternary Operator

function Conditionals2 () {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  let message;

  const login = () => {
    setIsLoggedIn(true)
  }
  const logout = () => {
     setIsLoggedIn(false)
  }

  return (
    <div>
      <h1>
        { 
          isLoggedin ? message = "Welcome, Tony" : message = "Welcome, Ternary Guest"
        }
      </h1>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  )

}

export default Conditionals2
