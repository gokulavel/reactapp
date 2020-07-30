import React from 'react';
import './../styles/Restaurantcardstyles.css';
export default class Restaurantcard extends React.Component
{
render(){
    return(<div>
        <div class ="card">
             <div class="img">
            <img src={this.props.img}/></div>
            <div class = "res-name">{this.props.name}</div>
            <div class = "res-desc">{this.props.cuisines}</div>
            <div class ="res-reviews"> {this.props.reviews}</div>
        </div>
    </div>)
     }
}