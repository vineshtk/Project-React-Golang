import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [movie, setMovie] = useState({});
    let { id } = useParams();


    useEffect(() => {
        let myMovie = {
            id: 2,
            title: 'Batman',
            release_date: "2000-06-18",
            runtime: 140,
            imbd_rating: 9,
            description: "best movie"
        }
        setMovie(myMovie)
    }, [id])

    return (

        <div>
            <h2>Movie : {movie.title}</h2>
            <small><em>{movie.release_date}, {movie.runtime} minutes, IMDB Rating: {movie.imbd_rating}</em></small>
            <hr />
            <p>{movie.description}</p>

        </div>

    )
}

export default Movie;