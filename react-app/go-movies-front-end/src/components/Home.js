import { Link } from "react-router-dom";
import Ticket from "./../images/movie_tickets.jpg"
const Home = () => {
    return (
        <>
            <div className="text-center">
                <h2>Find a movie to watch</h2>
                <hr />
                <Link to="/movies">
                    <img src={Ticket} alt="movie ticket"></img>
                </Link>
            </div>

        </>
    )
}

export default Home;