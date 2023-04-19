import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Detail() {
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
        <div className="box">
          <h1>{movies.title}</h1>
          <div>
            <img src={movies.medium_cover_image}></img>
          </div>
          <div style={{ textAlign: "center" }}>
            rating: {movies.rating} | year:{movies.year} | runtime :{" "}
            {movies.runtime} | genres:{" "}
            {movies.genres.map((genre) => genre + ", ")}{" "}
          </div>
          <h5>{movies.description_full}</h5>
        </div>
      )}
    </>
  );
}
export default Detail;
