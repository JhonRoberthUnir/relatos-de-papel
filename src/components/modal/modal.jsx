import React from "react";
import "./modal.css";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const Modal = ({
                   title,
                   id,
                   poster_path,
                   overview,
                   vote_average,
                   release_date
               }) => {
    console.log({ title, id, poster_path, overview, vote_average, release_date });
    return (
        <div className="modal" id={"myModal" + id}>
            <div className="modal-content">
        <span id={"close" + id}>
          <i className="fas fa-times"></i>
        </span>
                <div className="modal-poster">
                    <img src={IMG_URL + poster_path} alt={title} />
                </div>
                <div className="modal-info">
                    <h2>{title}</h2>
                    <span>{vote_average}/10</span>
                    <h3 className="releasedate">Release Date</h3>
                    <p>{release_date}</p>
                    <h3>Overview</h3>
                    <p className="modal-overview">{overview}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
