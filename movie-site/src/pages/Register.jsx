import React, { useContext, useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, signUpProvider } = useContext(AuthContext);

  //* birleştirilmiş state
  // const [info, setInfo] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, displayName);
  };

  // const { email, password, firstName, lastName } = info;
  // const hadleChange = (e) =>
  //   setInfo({ ...info, [e.target.id]: e.target.value });

  return (
    <div className="overflow-hidden mt-4 flex-1 h-screen justify-center items-center bg-success-100 dark:bg-[#08283d]">
      <div className={`form-container mt-[5vh] w-[380px] h-[550px]`}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign Up
          </h2>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_text"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="floating_email">First Name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="floating_text"
              type="text"
              required
              className="peer"
              placeholder=" "
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="floating_text">Last Name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="floating_email"
              type="email"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="floating_password"
              type="password"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
            <span className="text-gray-400">Go To Login Page <Link
              className="py-3  font-[0.75em] cursor-pointer decoration-none text-teal-600 hover:text-[#ff4b45]"
              to="/Login"
            >
              Login
            </Link></span>
          <button className="btn-danger" type="submit">
            Register
          </button>
          <button
            className="flex justify-between text-center btn-danger"
            type="button"
            onClick={() => signUpProvider()}
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
