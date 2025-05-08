import React from "react";
import CountUp from "react-countup";
import { GiRunningShoe } from "react-icons/gi";
import { IoMdAppstore } from "react-icons/io";
import { IoDownloadSharp } from "react-icons/io5";

const MyOwn = () => {
  return (
    <div className="mb-10 md:mb-10 mx-5 md:mx-10 lg:mx-20">
        <h1 className="text-lg md:text-2xl lg:text-3xl text-primary mb-5 font-semibold md:font-bold">WebSite Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        <div className="p-5 md:p-5 lg:p-7 bg-slate-200 rounded-2xl shadow-xl text-center overflow-hidden">
          <h1 className="hidden md:flex items-center md:my-3 lg:my-5 justify-center animate-bounce">
            <GiRunningShoe color="orange" size={200} />
          </h1>
          <h1 className="flex items-center md:hidden lg:hidden my-3 justify-center animate-bounce">
            <GiRunningShoe color="orange" size={100} />
          </h1>
          <h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-2 md:mb-4 text-primary">
            Total Visits (Per Day)
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-secondary">
            <CountUp end={300} duration={5} enableScrollSpy={true}></CountUp>
          </h1>
        </div>
        <div className="p-5 md:p-5 lg:p-7 bg-slate-200 rounded-2xl shadow-xl text-center overflow-hidden">
          <h1 className="hidden md:flex items-center md:my-3 lg:my-5  justify-center animate-bounce">
            <IoDownloadSharp color="orange" size={200} />
          </h1>
          <h1 className="flex items-center md:hidden lg:hidden my-3 justify-center animate-bounce">
            <IoDownloadSharp color="orange" size={100} />
          </h1>
          <h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-2 md:mb-4 text-primary">
            Total Downloads (Per Day)
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-secondary">
            <CountUp end={400} duration={5} enableScrollSpy={true}></CountUp>
          </h1>
        </div>
        <div className="p-5 md:p-5 lg:p-7 bg-slate-200 rounded-2xl shadow-xl text-center overflow-hidden">
          <h1 className="hidden md:flex items-center md:my-3 lg:my-5  justify-center animate-bounce">
            <IoMdAppstore color="orange" size={200} />
          </h1>
          <h1 className="flex items-center md:hidden lg:hidden my-3 justify-center animate-bounce">
            <IoMdAppstore color="orange" size={100} />
          </h1>
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 text-primary">
            Total Softwaxl
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-secondary">
            <CountUp end={1300} duration={5} enableScrollSpy={true}></CountUp>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MyOwn;
