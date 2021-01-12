import React, { Component } from 'react'
import './App.css';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../util/Yelp'

// const business={
//   imageSrc: './pizza.webp',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// }

// const busineesses=[business,business,business,business,business,business]

export default class App extends Component {


  state = {
    busineesses:[]
     
  }


  searchYelp=(term,location,sortBy)=>{
    Yelp.search(term, location, sortBy)
		.then(businesses => this.setState({businesses: businesses}))
      console.log("Searching Yelp With",term,location,sortBy)
  }

  render() {
    // this.searchYelp();
    return (
      <div className="App">
        <h1>Apollo Project</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList business={this.state.busineesses}/> 
      </div>
    )
  }
}

