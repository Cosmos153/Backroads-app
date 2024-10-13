import React from "react";
import "../index.css";
const Tourcard = ({ data }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={data.img} className="tour-img" alt="" />
        <p className="tour-date">{data.tourDate}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{data.title}</h4>
        </div>
        <p>{data.text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {data.country}
          </p>
          <p>{data.days} days</p>
          <p>from ${data.amount}</p>
        </div>
      </div>
    </article>
  );
};

export default Tourcard;
