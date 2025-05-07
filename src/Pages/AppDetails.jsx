import { FaBookOpen, FaDownload, FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import ReviewsSection from "../Components/ReviewsSection";
import { useState } from "react";

const AppDetails = () => {
  const [installed, setInstalled] = useState([]);
  const [button, setButton] = useState(true);
  console.log(installed);
  const handleInstall = () => {
    const installedArr = [...installed, "yes"];
    setInstalled(installedArr);
    setButton(!button);
  }
  const datas = useLoaderData();
  const { id } = useParams();
  const singleData = datas.find((data) => data.id == id);
  console.log(singleData);
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-sm mb-8">
        <figure>
          <img src={singleData.banner} alt="Album" />
        </figure>
        <div className="card-body">
          <div className="mb-2">
            <h2 className="card-title">{singleData.name}</h2>
            <h4 className="text-slate-600 pl-2">
              Developed by.{" "}
              <span className="text-slate-700 font-semibold">
                {singleData.developer}
              </span>
            </h4>
          </div>
          <div>
            <p>{singleData.description}</p>
            <p className="space-x-3 leading-8">
              <span className="font-semibold text-primary">Featuers:</span>{" "}
              {singleData.features.map((feature, index) => 
                <span key={index} className="text-primary bg-base-200 px-2 rounded-lg">
                  {feature}
                </span>
              )}
            </p>
            <div className="flex gap-14 mt-3">
              <div className="space-y-1">
                <p>Rating:</p>
                <p>Publication:</p>
                <p>Downloads:</p>
              </div>
              <div className="font-semibold space-y-1">
                <p className="flex gap-2">
                  <FaStar color="orange" /> {singleData.ratings}
                </p>
                <p className="flex gap-2">
                  <FaBookOpen color="blue" /> {singleData.releasedYear}
                </p>
                <p className="flex gap-2">
                  <FaDownload color="#0A9396" /> {singleData.downloads}
                </p>
              </div>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button onClick={handleInstall} className="btn btn-primary">{button? "Install": "Uninstall"}</button>
          </div>
        </div>
      </div>

      {/* Review Section */}

      <ReviewsSection installed={installed} singleData={singleData}></ReviewsSection>
    </div>
  );
};

export default AppDetails;
