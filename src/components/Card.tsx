import React, { useState } from "react";
import { Venue } from "@/constants/venue";
import { Rating } from "@mui/material";

interface CardProps {
  venue: Venue;
  onRatingChange: (venueName: string, newRating: number) => void;
}

const Card: React.FC<CardProps> = ({ venue, onRatingChange }) => {
  const [rating, setRating] = useState<number | null>(0);

  const handleRatingChange = (
    event: React.SyntheticEvent,
    newValue: number | null
  ) => {
    event.stopPropagation(); // Prevent card click event from firing
    setRating(newValue);
    if (newValue !== null) {
      onRatingChange(venue.name, newValue);
    }
  };

  return (
    <div className="border rounded-lg pb-4 shadow-md w-64 bg-slate-100 cursor-pointer">
      <img
        src={venue.imgSrc}
        alt={venue.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="px-3">
        <h3 className="text-lg font-semibold mt-2 text-slate-700">
          {venue.name}
        </h3>

        <Rating
          id={`${venue.name} Rating`}
          name={`${venue.name} Rating`}
          data-testid={`${venue.name} Rating`}
          value={rating}
          onChange={handleRatingChange}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default Card;
