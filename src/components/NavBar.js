import react from 'react';
import App from '../App';

function NavBar() {
    return (
        <div>
            <nav>
                <div className="logo">Bus Ticket Booking</div>
                <ul className="nav-links">
                    <li><a >Home</a></li>
                    <li><a href='/BookSeats'>Book Tickets</a></li>
                    <li><a href='/ClosedSeats'>Closed Seats</a></li>
                    <li><a href='/OpenSeats'>Open Seats</a></li>
                    <li><a href='/AdminLogin'>reset</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;