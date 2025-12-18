import React from "react";

const Card = ({ cardTitle, cardImage, cardData, cardChange }) => {
  return (
    <div className="bg-accent-900 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-accent-600 font-medium">{cardTitle}</h2>
        <img src={cardImage} alt={cardTitle} className="w-8 h-8 rounded-4xl" />
      </div>
      <div className="text-accent-50 text-2xl font-bold">{cardData}</div>
      <div className="text-accent-700 mt-2 flex items-center gap-1">
        <span className={cardChange > 0 ? "text-accent-500 font-medium" : "text-red-500 font-medium"}>
          {cardChange >= 0 ? "↑+" : "↓-"}
          {cardChange}%{" "}
        </span>
        vs last month
      </div>
    </div>
  );
};

export default Card;
