import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import NavH from "./components/nav/NavH";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Details from "./components/details/Details";

function App() {
  const [movies, setMovies] = useState([
    {
      id: Math.random(),
      movie: "Interstellar",
      starRate: 5,
      img: "https://www.movieposters.com/cdn/shop/products/interstellar1_8367fa45-5f0b-4b08-8e9b-8eaa4863f89d_480x.progressive.jpg?v=1673036776",
      about: "ABOUT THE MOVIE",
      desc: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: Math.random(),
      movie: "Inception",
      starRate: 5,
      img: "https://www.movieposters.com/cdn/shop/products/20664117398ad7301d9a9af6d2e5aa5c_1e3ea98b-b962-4982-9f74-2e44381fc6ff_480x.progressive.jpg?v=1573618694",
      about: "ABOUT THE MOVIE",
      desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: Math.random(),
      movie: "Prestige",
      starRate: 4,
      img: "https://www.movieposters.com/cdn/shop/products/99763af666ee931302e21c9cad3243ed_48a46774-8baf-4a98-b2bc-9ecf85dbff8b_480x.progressive.jpg?v=1573655133",
      about: "ABOUT THE MOVIE",
      desc: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
      trailer: "https://www.youtube.com/embed/RLtaA9fFNXU",
    },
    {
      id: Math.random(),
      movie: "Wolf of Wall Street",
      starRate: 4,
      img: "https://www.movieposters.com/cdn/shop/products/wolfofwallstreet_480x.progressive.jpg?v=1620229322",
      about: "ABOUT THE MOVIE",
      desc: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      trailer: "https://www.youtube.com/embed/iszwuX1AK6A",
    },
    {
      id: Math.random(),
      movie: "Illusionist",
      starRate: 3,
      img: "https://www.movieposters.com/cdn/shop/products/ece9c7d78e07e1d0040e9d57ec731a9d_c883c5d7-f211-4a57-bf8f-028c03ec50cd_480x.progressive.jpg?v=1573588899",
      about: "ABOUT THE MOVIE",
      desc: "In turn-of-the-century Vienna, a magician uses his abilities to secure the love of a woman far above his social standing.",
      trailer: "https://www.youtube.com/embed/i0xO64icGSY",
    },
    {
      id: Math.random(),
      movie: "Suicide Squad",
      starRate: 2,
      img: "https://www.movieposters.com/cdn/shop/products/4cb9f8f2f13966bcc6d4ef0bd2e82a6c_480x.progressive.jpg?v=1573615934",
      about: "ABOUT THE MOVIE",
      desc: "A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse.",
      trailer: "https://www.youtube.com/embed/CmRih_VtVAs",
    },
  ]);
  const addMovies = (m, s, i, d) => {
    const newMovie = {
      id: Math.random(),
      movie: m,
      starRate: s,
      img: i,
      about: "ABOUT THE MOVIE",
      desc: d,
    };

    setMovies([...movies, newMovie]);
  };

  const trash = (id) => {
    setMovies(movies.filter((el) => el.id !== id));
  };

  const [text, setText] = useState("");
  const find = (e) => {
    setText(e.target.value);
  };

  const [rate, setRate] = useState(0);
  const ratingChanged = (rate) => {
    setRate(rate);
  };

  const [bool, setBool] = useState(false);
  const handlebool = () => {
    setBool(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {bool ? (
          <NavH search={find} ratingChanged={ratingChanged} title={text} />
        ) : null}

        <Routes>
          <Route path="/" element={<Home bool={handlebool} />} />
          <Route
            path="/cards"
            element={
              <Cards
                movie={movies.filter(
                  (el) =>
                    el.movie
                      .trim()
                      .toLowerCase()
                      .includes(text.trim().toLowerCase()) &&
                    el.starRate >= rate
                )}
                add={addMovies}
                del={trash}
              />
            }
          />
          <Route path="/cards/:id" element={<Details mov={movies} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
