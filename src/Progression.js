import React from "react";

const Progression = ({ name, likes }) => {
  return (
    <li className="chord-card">
      <h3 className="chord-abbrev">{name}</h3>
      <div className="like-btn">
        <i className="fas fa-heart" />
        <span className="likes-count">{likes}</span>
      </div>
    </li>
  );
};

export default Progression;
