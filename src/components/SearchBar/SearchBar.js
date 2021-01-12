import React, { Component } from 'react'
import './SearchBar.css'



export default class SearchBar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             term:"",
             location:"",
             sortBy:"best_match"
        }
        this.sortByOptions={
            "Best Match":"best_match",
         "Highes Rated":"rating",
         "Most Reviewed":"review_count"
       }
    }
    
    renderSortByOptions=()=>{
        return Object.keys(this.sortByOptions).map((sortByOption)=>(
         <li onClick={this.handleSortByChange.bind(this, sortByOption)} className={this.getSortByClass(sortByOption)} key={this.sortByOptions[sortByOption]}>{sortByOption}</li>
        ))}

    getSortByClass=(sortByOption)=>{
        if(this.state.sortBy===sortByOption){
            return "active";
        }
    }
    handleSortByChange=(sortByOption)=>{
        this.setState({sortBy:sortByOption})
    }
    handleTermChange=(event)=>{
        this.setState({term:event.target.value})
    }
    handleLocationChange=(event)=>{
        this.setState({location:event.target.value})
    }
    // handleChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name] : value
    //     });
    // }
    handleSearch=(event)=>{
        this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
        event.preventDefault();
    }
render(){
    console.log(this.props)
    return(
        <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}  >Let's Go</a>
        </div>
      </div>
    )
}


}
