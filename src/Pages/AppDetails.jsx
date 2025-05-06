import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const datas = useLoaderData();
  const { id } = useParams();
  console.log(id, datas);
  const singleData = datas.find((data) => data.id == id);
  console.log(singleData);
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img src={singleData.banner} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{singleData.name}</h2>
        <div>
          <p>{singleData.description}</p>
          <p>{singleData.downloads}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
