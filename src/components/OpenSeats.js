import React, {Component, useState} from 'react';
import axios from 'axios';

class OpenSeats extends Component{
    
    constructor(){
        super();
        this.state = {
            seats : [],
        }
        
    }
    componentDidMount() {
       
        axios.get(`https://mern-bus-ticket-booking-system.herokuapp.com/api/SeatDetails/openSeats`)
          .then(res => {
            const seat = res.data;
            this.setState({ seats : seat });
            console.log(this.seats);

          })
    }
    render() {
        const {seat} = this.state;
        return (        
            this.state.seats.map((object, i) => {
                return(
                    <div >
                        seat Number: {object.seatNumbers}
                    </div>
                );
            })            
        ); 
    }
}
export default OpenSeats;