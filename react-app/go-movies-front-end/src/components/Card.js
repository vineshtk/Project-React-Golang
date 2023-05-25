import Ticket from "./../images/ticketbutton.png"
import "./Card.css"
const Card = () => {
    return (

        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={Ticket} alt="movie ticket"></img>
                </div>
                <div className="flip-card-back">
                    <img src={Ticket} alt="movie ticket"></img>
                    <h1>Show Movies</h1>
                </div>
            </div>
        </div>

    )
}

export default Card;





