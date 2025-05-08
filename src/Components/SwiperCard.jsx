import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { Link } from "react-router";

const SwiperCard = ({ data }) => {
  return (
    <Link to={`/app-details/${data.id}`} className="card bg-base-100 image-full shadow-sm">
      <figure className="h-[30vh] md:h-[40vh] lg:h-[70vh] overflow-hidden rounded-2xl">
        <img
          src={data.banner}
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
      </figure>
      <div className="card-body px-12 md:items-center md:justify-center">
        <h2 className="card-title text-2xl md:text-3xl text-primary">{data.name}</h2>
        <div>
          <p className="text-base-300 md:text-xl md:mx-auto text-base">{data.description}</p>
          <div className="flex justify-between mt-2">
            <p className="text-base-300 md:hidden flex md:justify-center md:text-2xl text-lg font-semibold items-center gap-1"><FaStar size={14} color="orange" />{data.ratings} </p>
            <p className=" hidden md:flex text-base-300 md:justify-center md:text-2xl text-lg font-semibold items-center gap-1"><FaStar size={30} color="orange" />{data.ratings} </p>
            <p className="text-base-300 text-lg font-semibold md:hidden flex items-center gap-1"><IoBookSharp color="#E9D8A6" size={14} /> {data.releasedYear}</p>
            <p className="text-base-300 hidden text-2xl md:flex font-semibold md:justify-center items-center gap-1"><IoBookSharp color="#E9D8A6" size={30} /> {data.releasedYear}</p>
          </div>
          <p className="text-base-300 md:hidden text-lg font-semibold flex md:mt-5 md:justify-center  items-center gap-1"><FaDownload size={14} color="#E9D8A6" /> {data.downloads}</p>
          <p className="text-base-300 hidden text-lg font-semibold md:flex lg:mt-5 md:justify-center  items-center gap-1"><FaDownload size={30} color="#E9D8A6" /> {data.downloads}</p>
        </div>
      </div>
    </Link>
  );
};

export default SwiperCard;
