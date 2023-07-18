import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./Details.css";

const Details = ({ mov }) => {
  const params = useParams();
  const movie = mov.find((el) => el.id === Number(params.id));
  return (
    <div className="details">
      <h2>{movie.about}</h2>
      <p>{movie.desc}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        frameborder="0"
      ></iframe>

      <Link to="/cards">
        <Button variant="primary">Back Home</Button>
      </Link>
    </div>
  );
};

export default Details;
