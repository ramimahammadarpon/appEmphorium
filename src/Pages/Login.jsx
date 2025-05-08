import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const {loginWithEmail, setUser, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = e => {
        console.log("This is handle login");
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginWithEmail(email, password).then(result => {
            // setUser(result.user);
            navigate('/');

        }).catch(error=> console.log(error));

    }

    const handleGoogleSignIn = () => {
        googleSignIn().then(result=>{
          console.log(result);
          setUser(result.user);
          navigate('/');
        }).catch(error=> console.log(error));
    }
  return (
    <div className="hero min-h-[85vh]">
      <div className=" flex-col lg:flex-row-reverse w-11/12">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl border">
          <div className="card-body">
          <h1 className="text-2xl font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" name="email" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" name="password" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p>Don't Have any Account? <Link className="text-blue-600 underline font-semibold" to="/authentication/registration">Register Now</Link></p>
            <p className="text-center">Or</p>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary"><FcGoogle size={20} />Sign In using Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
