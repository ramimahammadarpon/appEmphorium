import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
  const { registerWithMail, setUser, updateInfo, googleSignIn } = useContext(AuthContext);
  useEffect(()=>{
        document.title = "App Emphorium | Registration"
      },[]);
  const navigate = useNavigate();
  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photoUrl, email, password);
    registerWithMail(email, password)
      .then((result) => {
        updateInfo({ displayName: name, photoURL: photoUrl });
        setUser({ ...result.user, displayName: name, photoURL: photoUrl });
        navigate('/')
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-[85vh]">
      <div className="mx-auto w-11/12">
        <div className="card bg-base-200 mx-auto w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl font-bold">Register now!</h1>
            <form onSubmit={handleRegistration} className="fieldset">
              <label className="label">Full Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Full Name"
                required
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                name="photoUrl"
                placeholder="Photo URL"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
                required
              />
              <button className="btn btn-primary mt-4">Register</button>
            </form>
            <p>
              Already Have an Account?{" "}
              <Link
                className="text-blue-600 underline font-semibold"
                to="/authentication/login"
              >
                Login Now
              </Link>
            </p>
            <p className="text-center">Or</p>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary">
              <FcGoogle size={20} />
              Sign In using Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
