import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Detail(year,coverImg, title, summary, genres ) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  console.log(movies);

  console.log(movies);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovies(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <div className="detail__container">
        <div className="detail__poster">
          <img src={coverImg} alt={title} />
        </div>
        <div className="detail__info">
          <h1>{title}</h1>
          <h2>{genres.join(", ")}</h2>
          <h3>{year}</h3>
          <p>{summary}</p>
        </div>
      </div>
      )}
    </>
  );
}
export default Detail;
