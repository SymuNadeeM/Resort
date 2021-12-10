import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Service = () => {
  const [service, setService] = useState([
    {
      icon: <FaCocktail />,
      title: "Free cocktails",
      info: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
    },
    {
      icon: <FaBeer />,
      title: "Free Beer",
      info: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
    },
  ]);

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {service.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
