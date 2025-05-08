import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const Profile = () => {
  const { user, setUser, updateInfo } = useContext(AuthContext);
  const lastLoginDate = new Date(user.metadata.lastSignInTime).toLocaleString();
  const firstLoginDate = new Date(user.metadata.creationTime).toLocaleString();
  const [visible, setVisible] = useState(false);
  useEffect(()=>{
          document.title = `App Emphorium | ${user.name}`
      },[user.name])
  
  const handleUpdateProfile = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    updateInfo({displayName:name, photoURL:photoUrl}).then(()=>{
        // console.log(result);
        setUser({...user, displayName:name, photoURL:photoUrl})
        setVisible(false);
    }).catch(error=>console.log(error))
  }
  //   console.log(date);
  return (
    <div className="md:min-h-[60vh]">
      <div className="text-center">
        <img
          className="w-48 md:w-60 lg:w-80 aspect-square object-cover rounded-full mx-auto"
          src={user.photoURL}
          alt={user.photoURL}
        />
        <h3 className="text-2xl font-bold mt-2">{user.displayName}</h3>
      </div>
      <div className="flex items-center md:justify-center lg:gap-20 gap-5 lg:my-10 mt-6">
        <div className="space-y-3 lg:text-xl">
          <p>User Name:</p>
          <p>User Email:</p>
          <p>Last Sign In Time: </p>
          <p>First SignIn Time: </p>
        </div>
        <div className="font-semibold space-y-3 lg:text-xl">
          <p>{user.displayName}</p>
          <p>{user.email}</p>
          <p>{lastLoginDate}</p>
          <p>{firstLoginDate}</p>
        </div>
      </div>
      <form onSubmit={handleUpdateProfile} className={`p-3 border border-primary rounded-2xl md:w-5/9 lg:3/9 mx-auto mt-6 ${visible? "flex": "hidden"}`}>
        <div className="pt-3 md:flex md:flex-col md:items-center md:justify-center w-full">
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
          <div className="text-center mt-2">
            <button
              className="btn btn-dash btn-primary font-normal text-xs"
              type="submit"
            >
              Save Change
            </button>
          </div>
        </div>
        <div>
            <button onClick={()=>setVisible(false)} className="hover:text-orange-400 hover:bg-base-200 text-red-600 py-2 px-4 rounded-2xl" type="button">X</button>
        </div>
      </form>
      <div className="text-center mt-4">
        {!visible&&<button onClick={()=>setVisible(true)} className="btn btn-primary">
          Update Name or Profile Picture
        </button>}
      </div>
    </div>
  );
};

export default Profile;
