import React, { useEffect, useState } from "react";
import Axios from "../../Helpers/Axios";
import VideoCard from "../Card/VideoCard";
import "./Results.css";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await Axios.get(selectedOption);
      setMovies(request.data.results);
    };
    fetchData();
  }, [selectedOption]);
  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
