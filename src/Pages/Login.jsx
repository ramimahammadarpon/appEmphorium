import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Login = () => {
  const { loginWithEmail, err, setErr, setUser, googleSignIn, forgetPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "App Emphorium | Login";
    setErr('');
  }, [setErr]);
  const handleLogin = (e) => {
    setErr("");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginWithEmail(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Logged In Successfully");
        
        navigate("/");
      })
      .catch((error) => {
        setErr(error.message);
        toast.error("Sorry! Couldn't Log In");
      });
  };

  const handleGoogleSignIn = () => {
    setErr("");
    googleSignIn()
      .then((result) => {
        toast.success("Signned In Successfully");
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        setErr(error.message)
        toast.error("Sorry! Couldn't Sign In");
      });
  };
  const handleForgetPassword = () => {
    setErr("");
    const email = document.getElementById("email").value;
    forgetPassword(email)
      .then(() => {
        toast.success("An Email Sent To Your Email Account", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => setErr(error.message));
  };
  return (
    <div className="hero min-h-[85vh]">
      <div className="w-11/12 mx-auto">
        <div className="card bg-base-200 w-full max-w-sm shadow-2xl mx-auto">
          <div className="card-body">
            <h1 className="text-2xl font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                id="email"
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
              />
              <div className="mt-3">
                <a onClick={handleForgetPassword} className="link link-hover">
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-primary mt-4">Login</button>
            </form>
            {err && <p className="text-red-500">{err}</p>}
            <p>
              Don't Have any Account?{" "}
              <Link
                className="text-blue-600 underline font-semibold"
                to="/authentication/registration"
              >
                Register Now
              </Link>
            </p>
            <p className="text-center">Or</p>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-secondary"
            >
              <FcGoogle size={20} />
              Sign In using Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
