import React, { useState } from 'react'
import './loginsignup.css'
const LoginSignUp = () => {

    //It's a react hook 
    const [action,setAction] = useState("Login")
  return (
    <div className='Container'>
      <div className="header">
      <div className="underline"></div>
    </div>
    <div className="submit-container">
        <div className={action ==="Login"?"grey":"submit"} onClick={()=>{setAction("SignUp")}}>SignUp</div>
        <div className={action ==="SignUp"?"grey":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
    </div>
    <div className="inputs">
        {action === "Login"?<></>:<div className="input">
            <img src="" alt="" />
            <input type="text" name="Username" id="" placeholder='Name' />
        </div>}        
        <div className="input">
            <img src="" alt="" />
            <input type="email" name="Email" id="" placeholder='Email'/>
        </div>
        <div className="input">
            <img src="" alt="" />
            <input type="password" name="Password" id="" placeholder='Password' />
        </div>
    </div>
  
    {action ==="SignUp"?<></>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
        
        {/* <div className="submit1"><input type="submit" value="submit"/></div> */}

        <div className="submit-button">
          <div className="submit1" onClick={()=>setAction("Submit")}>
            Submit
          </div>
        </div>
    </div>
  )
}

export default LoginSignUp
