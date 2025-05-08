import React, { useContext, useState } from "react";
import Review from "./Review";
import { FaRegStar, FaStar } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";

const ReviewsSection = ({ singleData, installed }) => {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  console.log(rating);
  const {user} = useContext(AuthContext);
  console.log(user);
  const handleSubmit = e => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const review = {
        rating,
        comment,
        user: user.displayName,

    }
    const feedBackArr = [...reviews, review];
    setReviews(feedBackArr);


  }
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-xl lg:text-3xl text-primary">Our Client's Say</h3>
      <div>
        {singleData?.reviews?.map((review, index) => (
          <Review key={index} review={review}></Review>
        ))}

        {
            reviews.map((review,index) => <Review key={index} user={user} review={review}></Review>)
        }
      </div>
      {installed.length?<div>
        <h5 className="text-primary font-semibold text-lg mt-5 mb-3">
          Give Us Your Valueable Rating
        </h5>

        <div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
            <div className="lg:w-1/3">
              <input
                id="text-field"
                type="text"
                className="w-full h-12 lg:h-24 border p-2 rounded-lg"
                placeholder="Enter Your Feedback"
                name="comment"
                required
              />
              <div className="flex gap-1 mt-2">
               {
                [1,2,3,4,5].map(star =>{
                    if((star)<=rating){
                        return <div key={star}>
                          <FaStar className="lg:hidden"  size={24} color="orange" onClick={()=>setRating(star)}/>
                          <FaStar className=" hidden lg:inline-block" size={40} color="orange" onClick={()=>setRating(star)}/>
                          </div> 
                    }
                    else{
                        return <div key={star}>
                          <FaRegStar className="lg:hidden" size={24} color="orange" onClick={()=> setRating(star)}/>
                          <FaRegStar className=" hidden lg:inline-block"  size={40} color="orange" onClick={()=> setRating(star)}/>
                        </div>
                    }
                })
               }
               
              </div>

                <div>
                    <button type="submit" className="btn btn-primary mt-2 lg:text-xl">Submit Your Rating</button>
                </div>
            </div>
          </form>
        </div>
      </div>: ""}
    </div>
  );
};

export default ReviewsSection;
