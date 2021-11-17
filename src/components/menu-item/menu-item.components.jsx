import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ otherSectionProps }) => {
  debugger;
  const navigate = useNavigate();

  return (
    <div
      className={`${otherSectionProps.size} menu-item`}
      onClick={() => navigate(`${otherSectionProps.linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${otherSectionProps.imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{otherSectionProps.title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
