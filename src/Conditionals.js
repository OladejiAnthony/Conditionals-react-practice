import React,{useState} from "react"

//Create a component that login/logout a user at button click
//IF ELSE Statement

function Conditionals () {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  let message;
  if  (isLoggedin) {
    message = "Welcome Zino"
  } else {
    message = "Welcome IF-ELSE Guest"
  }

  const login = () => {
    setIsLoggedIn(true);
    console.log(message);
  }
  const logout = () => {
    setIsLoggedIn(false);
    console.log(message)
  }

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={login}>
        Login
      </button>
      <button onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Conditionals;

