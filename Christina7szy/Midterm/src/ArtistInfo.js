import React, { Component, Fragment} from 'react';
import './App.css';
import ArtistDetail from './ArtistDetail';

class ArtistInfo extends Component{
    constructor(props) {
        super(props);
        this.state={
          clicked: false,
        }
      }
    handleImgClick(){
        console.log(this.state.clicked);
        this.setState({
          clicked:true
        })
    }
    render(){
        return (
        <div>
            {(this.props.content &&
              this.props.content.images[1]) ?
              <Fragment>
                <a>
                  <img onClick = {this.handleImgClick.bind(this)} src = {this.props.content.images[0].url} /> 
                  {this.state.clicked? <ArtistDetail content={this.props.content}/> :null}
                </a>
                <h1 className="artistName">{this.props.content.name}</h1>
              </Fragment>
            :[]}
         </div>
        )
        
    }
}

export default ArtistInfo; 