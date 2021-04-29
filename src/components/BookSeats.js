import React from 'react';
import axios from 'axios';

export default class OpenSeats extends React.Component{
    constructor(){
        super()
        this.state={
            name: '',
            gender:'',
            mobile:'',
            source:'',
            destination:'',
            NumberOfSeats:'',
            seatNumbers:''
        };
        this.NameChange = this.NameChange.bind(this);
        this.GenderChange = this.GenderChange.bind(this);
        this.MobileChange = this.MobileChange.bind(this);
        this.SourceChange = this.SourceChange.bind(this);
        this.DestinationChange = this.DestinationChange.bind(this);
        this.NumberOfSeatsChange = this.NumberOfSeatsChange.bind(this);
        this.seatNumbersChange = this.seatNumbersChange.bind(this);
    }

    NameChange(event){
        this.setState({name : event.target.value});
    }
    GenderChange(event){
        this.setState({gender : event.target.value});
    }
    MobileChange(event){
        this.setState({mobile: event.target.value});
    }
    SourceChange(event){
        this.setState({source : event.target.value});
    }
    DestinationChange(event){
        this.setState({destination : event.target.value});
    }
    NumberOfSeatsChange(event){
        this.setState({NumberOfSeats : event.target.value});
    }
    seatNumbersChange(event){
        this.setState({seatNumbers : event.target.value});
    }

    handleSubmit = event =>{
        event.preventDefault();
        const user = {
            name: this.state.name,
            gender : this.state.gender,
            mobile : this.state.mobile,
            source : this.state.source,
            destination : this.state.destination,
            NumberOfSeats : this.state.NumberOfSeats,
            seatNumbers : this.state.seatNumbers
        }
        console.log(user);
        axios.post('http://localhost:5000/api/bookingdetails/add', {user}).then(res =>{
            alert('Your Ticket is booked successfully')
            console.log(res.data);
        });
        
    }

    render(){
        return(
            <div className="form-center">
            <form onSubmit={this.handleSubmit}>
            <div className="form-inner">
                <div className="form-group">
                    <label>Name:
                        <input type="text" name="name" onChange={this.NameChange}  value={this.name}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>Gender:
                        <input type="text" name="gender" onChange={this.GenderChange} value={this.gender}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>Mobile:
                        <input type="text" name="mobile" onChange={this.MobileChange} value={this.mobile}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>Source:
                        <input type="text" name="source" onChange={this.SourceChange} value={this.source}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>Destination:
                        <input type="text" name="destination" onChange={this.DestinationChange} value={this.destination}/>
                    </label>
                </div>
                <div className="form-group">    
                    <label>NumberOfSeats:
                    <input type="text" name="NumberOfSeats" onChange={this.NumberOfSeatsChange} value={this.NumberOfSeats}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>SeatNumbers:
                        <input type="text" name="SeatNumbers" onChange={this.seatNumbersChange} value={this.seatNumbers}/>
                    </label>
                </div>
                <button type="submit">LOGIN</button>
            </div>
            </form>
            </div>
        )
    }
}