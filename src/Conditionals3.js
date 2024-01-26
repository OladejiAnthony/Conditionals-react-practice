import React,{useState} from "react"

//Create a component that login/logout a user at button click
//// Logical AND (&&) OPERATOR


function Conditionals3 () {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true)
  }
  const logout = () => {
     setIsLoggedIn(false)
  }

  return (
    <div>
      <h1>{isLoggedin && "Welcome, Jack"}</h1>
      <h1>{!isLoggedin && "Welcome, Logical Guest"}</h1>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Conditionals3;

