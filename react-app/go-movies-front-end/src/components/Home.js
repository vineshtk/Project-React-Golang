import { Link } from "react-router-dom";
import Card from "./Card";
import "./Card.css"
const Home = () => {
    return (
        <>
            <div className="text-center">
                <h2>Find a movie to watch</h2>
                <hr />
                <div className="center">
                    <Link to="/movies">
                        <Card />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home;


