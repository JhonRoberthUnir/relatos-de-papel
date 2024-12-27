import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./books.css"
import Movies from "../movies/movies.jsx";
import Modal from "../modal/modal.jsx";

const API_KEY = "api_key=247b6aa143f3f2c0b100c0cbdfb1ac99";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

function App() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });
    }, []);

    const handleClickMovie = (...movie) => {
        setSelectedMovie(movie);
        setShowModal(!showModal);
    };

    console.log(selectedMovie);
    return (
        <>
            <Router>
                <div className="movie-container">
                    {movies.length > 0 &&
                        movies.map((movie) => (
                            <Movies
                                key={movie.id}
                                {...movie}
                                handleClickMovie={handleClickMovie}
                            />
                        ))}
                </div>
                <div className="modal-container">
                    {showModal && <Modal {...selectedMovie} />}
                </div>
                <Routes>
                    <Route exact path="/" />
                </Routes>
            </Router>
        </>
    );
}

export default App;
