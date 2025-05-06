import React from "react";
import errorPic from "../assets/error.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <img className="mt-28 px-5" src={errorPic} alt="" />
      <div className="text-center mt-6">
        <Link to="/" className="btn btn-primary text-2xl text-base-200">
          <span>Go</span> Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
