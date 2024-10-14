import React from "react";
import Title from "./Title";
import Tourcard from "./Tourcard";
import { tour } from "../data";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title={"Exciting"} subTitle={"tours"} />
      <div className="section-center featured-center">
        {tour.map((data) => {
          return <Tourcard data={data} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
