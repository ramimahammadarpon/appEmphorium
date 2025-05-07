import React, { useState } from "react";
import Review from "./Review";
import userImg from "../assets/user.png";
import { FaRegStar, FaStar } from "react-icons/fa";

const ReviewsSection = ({ singleData }) => {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  console.log(rating);
  const handleSubmit = () => {
    const comment = document.getElementById("text-field").value;
    const review = {
        rating,
        comment
    }
    const feedBackArr = [...reviews, review];
    setReviews(feedBackArr);


  }
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-xl text-primary">Our Client's Say</h3>
      <div>
        {singleData.reviews.map((review, index) => (
          <Review key={index} review={review}></Review>
        ))}

        {
            reviews.map((review,index) => <Review key={index} review={review}></Review>)
        }
      </div>
      <div>
        <h5 className="text-primary font-semibold text-lg mt-5 mb-3">
          Give Us Your Valueable Rating
        </h5>

        <div>
          <div className="flex gap-2">
            <img className="w-10 h-10" src={userImg} alt="" />
            <div>
              <input
                id="text-field"
                type="text"
                className="w-full h-12 border p-2 rounded-lg"
                placeholder="Enter Your Feedback"
              />
              <div className="flex gap-1 mt-2">
               {
                [1,2,3,4,5].map(star =>{
                    if(star<=rating){
                        return <FaStar key={star} size={24} color="orange" onClick={()=>setRating(star)}/> 
                    }
                    else{
                        return <FaRegStar key={star} size={24} color="orange" onClick={()=> setRating(star)}/>
                    }
                })
               }
               
              </div>

                <div>
                    <button onClick={handleSubmit} className="btn btn-primary mt-2">Submit Your Rating</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
