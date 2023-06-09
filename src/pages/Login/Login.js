import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import login from "../../images/signIn&Out/login&signup.svg";

const Login = () => {
  const {signIn, signInGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then((result) => {
      const user = result.user;
      if(user?.emailVerified){
        form.reset();
        navigate(from, { replace: true });
        toast.success('Login successfully')
      }else{
        toast.error('Email is not verified');
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
      toast.error(errorMessage);
    })
  }

  const handleGoogleSignIn = () => {
    signInGoogle()
    .then((result) => {
      const user = result.user;
      navigate(from, { replace: true });
      toast.success(`Login successfully ${user?.email}`)
    })
    .catch(error => {
      const errorMessage = error.message;
      toast.error(errorMessage);
    })
  }

  return (
    <form onSubmit={handleLogin} className="hero py-10">
      <div className="hero-content grid md:grid-cols-2 gap-20">
        <div className="lg:w-96 md:w-80">
          <img src={login} alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name='email'
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
                name='password'
                className="input input-bordered"
              />
              <label className="label">
                {/* <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a> */}
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className='text-center mt-4'>New to Cloud Kitchen? <Link className='text-red-900' to='/signup'>Signup</Link></p>
          </div>
          <button onClick={handleGoogleSignIn} className='btn btn-warning btn-active'>Google</button>
        </div>
      </div>
    </form>
  );
};

export default Login;

