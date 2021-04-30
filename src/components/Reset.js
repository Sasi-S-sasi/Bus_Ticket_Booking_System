import React from "react";
import axios from 'axios';


export class Reset extends React.Component {
  constructor(props) {
    super(props);
    

    this.resetButton = this.resetButton.bind(this);

    }

    resetButton(e) {

        e.preventDefault();
            
        axios.delete('https://mern-bus-ticket-booking-system.herokuapp.com/api/reset')
        .then(function (response) {

            console.log(response);
            alert("Reset is successfull");

        }).catch(function (error) {

            console.log(error);

        });


}



  render() {
    return (
      <>
      <div >Reset all data</div>
        
        <div >
          <button onClick={this.resetButton}>
            Reset
          </button>
        </div>
      
      </>
    );
  }
}
