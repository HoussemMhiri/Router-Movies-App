import React from "react";
import ReactStars from "react-stars";

export const Star = ({ ratingChanged }) => {
  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        color2={"#ffd700"}
      />
    </div>
  );
};
