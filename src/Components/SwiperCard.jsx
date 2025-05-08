import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { Link } from "react-router";

const SwiperCard = ({ data }) => {
  return (
    <Link to={`/app-details/${data.id}`} className="card bg-base-100 image-full shadow-sm">
      <figure className="h-[30vh] overflow-hidden rounded-2xl">
        <img
          src={data.banner}
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
      </figure>
      <div className="card-body px-12">
        <h2 className="card-title text-2xl text-primary">{data.name}</h2>
        <div>
          <p className="text-base-300 text-base">{data.description}</p>
          <div className="flex justify-between mt-2">
            <p className="text-base-300 flex text-lg font-semibold items-center gap-1"><FaStar size={14} color="orange" />{data.ratings} </p>
            <p className="text-base-300 text-lg font-semibold flex items-center gap-1"><IoBookSharp color="#E9D8A6" size={14} /> {data.releasedYear}</p>
          </div>
          <p className="text-base-300 text-lg font-semibold flex items-center gap-1"><FaDownload size={14} color="#E9D8A6" /> {data.downloads}</p>
        </div>
      </div>
    </Link>
  );
};

export default SwiperCard;
