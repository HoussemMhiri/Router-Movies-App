import "./Cards.css";
import { Button, Card } from "react-bootstrap";

import AddBtn from "./AddBtn";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";

const Cards = ({ movie, add, del }) => {
  return (
    <div>
      <main>
        {movie.map((el) => (
          <Card key={el.id} style={{ width: "20rem", height: "45rem" }}>
            <Card.Img
              variant="top"
              src={el.img}
              style={{ overflow: "hidden", height: "25rem" }}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                {el.movie}
              </Card.Title>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ReactStars
                  count={el.starRate}
                  size={24}
                  color1="#ffd700"
                  value={5}
                />
              </p>
              <h5>{el.about} </h5>
              <p>{el.desc}</p>
              <div className="del-bnt">
                <Button onClick={() => del(el.id)} variant="danger">
                  Delete
                </Button>

                <Link to={`/cards/${el.id}`}>
                  <Button variant="primary">Details</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        ))}
      </main>
      <AddBtn add={add} />
    </div>
  );
};

export default Cards;
