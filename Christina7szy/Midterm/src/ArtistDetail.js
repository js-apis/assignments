import React, { Component, Fragment} from 'react';
import './App.css';

class ArtistDetail extends Component{
    render(){
        return(
           <Fragment>   
            <h2> Genre: {this.props.content.genres[0]}</h2>   
            <h2> Followers: {this.props.content.followers.total}</h2>
           
           </Fragment> 
        )
    }


}
export default ArtistDetail; 