import React, { useState } from "react";
import "./loginsignup.css";
import axios from "axios";

//React Function based componnents
const Loginsignup = (props) => {
  const data = {
    uname: "",
    email: "",
    pwd: "",
  };

  const [action, setAction] = useState("Login");
  const [inputData, setInputData] = useState(data);

  const Handler = async (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(e);
    console.log("e.target.name", e.target.name + " : " + e.target.value);

    if (e.target.name === "uname" && action === "SignUp") {
      let reqData = { uname: e.target.value };
      await axios
        .post("/app/onChange", reqData)
        .then((res) => {
          console.log(res.data);
          if (res.data.status === "Exist") {
            alert("Username already exist");
          }
        })
        .catch((e) => {
          console.log("error", e);
        });
    }
  };

  const HandleSubmitSign = async () => {
    console.log("Inside the handle submit function");
    await axios.post("/app/Signup", inputData).then((res) => {
      console.log(res.data);
      if (res.data.message === "success") {
        alert("SignUp Successful");
      } else {
        return res.data;
      }
    });

    document.getElementById("inputs").reset();
  };

  const HandleSubmitLog = async () => {
    console.log("Inside the handle submit function");
    await axios.post("/app/Login", inputData).then((res) => {
      console.log(res.data);
      if (res.data.message === "success") {
        alert("Login Successful");
      } else {
        alert("!!Invalid Username and Password!!");
        return res.data;
      }
    });

    document.getElementById("inputs").reset();
  };

  return (
    <div className="Container">
      <div className="header">
        <div className="underline"></div>
      </div>
      <div className="submit-container">
        <div
          className={action === "Login" ? "grey" : "submit"}
          onClick={() => {
            setAction("SignUp");
          }}
        >
          SignUp
        </div>
        <div
          className={action === "SignUp" ? "grey" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
      <form id="inputs">
        <div className="inputs">
          <div className="input">
            <img src="" alt="" />
            <input
              type="text"
              name="uname"
              id="name"
              placeholder="UserName"
              onChange={Handler}
              required
            />
          </div>
          {action === "Login" ? (
            <></>
          ) : (
            <div className="input">
              <img src="" alt="" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={Handler}
                required
              />
            </div>
          )}
          <div className="input">
            <img src="" alt="" />
            <input
              type="password"
              name="pwd"
              id="password"
              placeholder="Password"
              onChange={Handler}
              required
            />
          </div>
        </div>
      </form>

      {action === "SignUp" ? (
        <></>
      ) : (
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
      )}

      {/* <div className="submit1"><input type="submit" value="submit"/></div> */}

      <div className="submit-button1">
        <input
          className="Sub1"
          type="submit"
          onClick={action === "Login" ? HandleSubmitLog : HandleSubmitSign}
        />
      </div>
    </div>
  );
};

export default Loginsignup;
