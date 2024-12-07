"use client";
import { useState } from "react";

interface starratingprops {
  totalStars?: number;
  onRatingChange?: (rating: number) => void;
}

const StarRating = ({ totalStars = 5, onRatingChange }: starratingprops) => {
  const [rating, setRating] = useState(0); // Stores the current rating
  const [hover, setHover] = useState(0);  // Handles hover effect

  const handleClick = (value: number) => {
    setRating(value);
    if (onRatingChange) onRatingChange(value); // Trigger callback
  };

  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;

        return (
          <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor"
            className={`size-5 cursor-pointer transition ${
              (hover || rating) >= starValue ? "fill-[#FFAD33]" : "fill-black opacity-25"
            }`}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            onClick={() => handleClick(starValue)}
          >
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg> 
        );
      })}
    </div>
  );
};

export default StarRating;
