import React from "react";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const Card = ({ cardTitle, cardImage, cardData, cardChange }) => {
  return (
    <div className="bg-accent-900 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4 text-accent-300">
        <h2 className=" font-medium">{cardTitle}</h2>
        {cardImage}
      </div>
      <div className="text-accent-50 text-3xl font-bold">{cardData}</div>
      <div className="text-accent-700 mt-2 flex items-center gap-1">
        {cardChange >= 0 ? (
          <FaArrowTrendUp className="text-accent-500" />
        ) : (
          <FaArrowTrendDown className="text-red-500" />
        )}
        <span
          className={
            cardChange >= 0
              ? "text-accent-500 font-medium"
              : "text-red-500 font-medium"
          }
        >
          {cardChange}%{" "}
        </span>
        vs last month
      </div>
    </div>
  );
};

export default Card;
