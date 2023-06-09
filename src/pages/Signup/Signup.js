import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import login from "../../images/signIn&Out/login&signup.svg";

const Signup = () => {
  const { createUser, verifyEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const emailVerification = () => {
      verifyEmail().then(() => {
        toast.success("Check your mail and Verify. Then, Login!");
        navigate("/login");
      });
    };

    createUser(email, password)
      .then((result) => {
        emailVerification();
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <form onSubmit={handleSignUp} className="hero py-10">
      <div className="hero-content grid md:grid-cols-2 gap-20">
        <div className="lg:w-96 md:w-80">
          <img src={login} alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Signup</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Signup</button>
            </div>
            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link className="text-red-900" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
