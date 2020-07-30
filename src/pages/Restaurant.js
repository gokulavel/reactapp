import React from "react";
import Header from './../components/Header';
import Restaurantcard from './../components/Restaurantcard';
import './../styles/respagestyles.css';
import dummyData from './../data/dummyData.json'

export default class Restaurant extends React.Component
{
    constructor()
    {
      super();
      this.state={Restaurant:[]}
    }

    componentDidMount()
    {
        // console.log("hello");
        console.log(dummyData);
        this.setState(
            {
                Restaurant:dummyData
            }
        )
    }
    render()
    {
        return(
         <div>
            <div><Header/></div>
             <div className = "container">
                 {
                     this.state.Restaurant.map((item) => 
                     {
                         return<Restaurantcard
                         name ={item.name}
                         cuisines ={item.cuisines}
                         img = { item.feature_image}
                         reviews ={item.reviews}/>
                     }
                )
                   }
                </div>
            </div>
               )
    }

}