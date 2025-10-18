import React from "react";

const HeadingCard = ({ title }) => {
  if (!title) return;
  return (
    <div className="mx-auto text-black flex justify-center px-6 py-3 rounded-full border text-sm border-gray-300">
      <p>{title || ""}</p>
    </div>
  );
};

export default HeadingCard;
