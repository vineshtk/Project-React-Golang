import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let moviesList = [
            {
                id: 1,
                title: 'Rambo',
                release_date: "1985-05-15",
                runtime: 120,
                imbd_rating: 7,
                description: "it is a good movie"
            },
            {
                id: 2,
                title: 'Batman',
                release_date: "2000-06-18",
                runtime: 140,
                imbd_rating: 9,
                description: "best movie"
            },

        ];
        setMovies(moviesList)
    }, [])
    return (
        <div>
            <div className="text-center">
                <h2>Movies</h2>
                <hr />
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Movie</th>
                            <th>Relase Date</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((m) => (
                            <tr key={m.id}>
                                <td>
                                    <Link to={`/movies/${m.id}`}>
                                        {m.title}
                                    </Link>
                                </td>
                                <td>{m.release_date}</td>
                                <td>{m.imbd_rating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Movies;