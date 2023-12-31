import React from "react";
import Input from "@components/Generals/input";
import Button from "@components/Generals/button";
const signUpFormsCreditionals = [
  {
    id: 1,
    label: "Full Name *",
    type: "text",
  },
  {
    id: 2,
    label: "Email *",
    type: "text",
  },
  {
    id: 3,
    label: "Phone Number *",
    type: "text",
  },
  {
    id: 4,
    label: "Password *",
    type: "password",
  },
  {
    id: 5,
    label: "Confirm Password *",
    type: "password",
  },
];
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="signUpWrapper row">
      <div className="signUpHeader col-12">
        <h1>
          Welcome to Pathsync <span>👋</span>
        </h1>
        <p>Please login in order to proceed with you account.</p>
      </div>
      <div className="signUpBody col-12">
        <form>
          {/* <div class="form-group input-group-lg">
            <label>Full Name *</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group input-group-lg">
            <label>Email *</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group input-group-lg">
            <label>Phone Number *</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group input-group-lg">
            <label>Password *</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group input-group-lg">
            <label>Confirm Password *</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div> */}
          {signUpFormsCreditionals.map((item) => (
            <Input key={item.id} {...item} />
          ))}
        </form>
        <div className="signUpUtility">
          <input type="checkbox" />
          <p>
            I agree to the <span>terms and conditions</span>
          </p>
        </div>
        <div className="loginButton">
          {/* <button class="btn btn-primary" type="button">
            Sign Up
          </button> */}
          <Button
            text={"Sign up"}
            fontColor={"#ffff"}
            fontSize="18"
            color="primary"
            buttonSize={"lg"}
          />
        </div>
        <div className="loginUtility2">
          <p>Already have an account?</p>
          <a>
            <Link to="/login">Login here</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
