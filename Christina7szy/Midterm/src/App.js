import React, { Component, Fragment} from 'react';
import './App.css';
import queryString from 'query-string';
import ArtistInfo from './ArtistInfo';
import ArtistDetail from './ArtistDetail';

let defaultStyle = {
  color: '#333333'
};

let artist = '';
var artistData ='';

class ArtistSearch extends Component {
  constructor(props) {
    super(props);
    this.state={
      inputValue:"",
      list:[],
      clicked: false,
    }
  }

handleInputChange(e){
    this.setState({
    })
    this.state.inputValue = e.target.value;
}

handleImgClick(){
  console.log("clicked");
  this.setState({
    clicked:true
  })
}

handleBtnClick(){
    artist = this.state.inputValue.toString();
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
  if (!accessToken)
    return;
   fetch('https://api.spotify.com/v1/search?q='+artist+'&type=artist', {
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    headers: {'Authorization': 'Bearer ' + accessToken}
  }).then(response => response.json())
  .then(data => this.setState({list:[...data.artists.items]}))
}

render() {
  console.log(this.state);        
    return (
      <Fragment>
      <div className="inline">
          <input
              value = {this.state.inputValue}
              onChange= {this.handleInputChange.bind(this)}
          />
          <button className="searchBtn" type="submit"onClick={this.handleBtnClick.bind(this)}>Search</button></div>
      {/* When I console.log this.state.list[0].images, it shows me the list of image the json has. However, when i put 
      this.state.list[0].images[0].url, it will show error of "can't get url of undefined" */}
      {(this.state.list[0] && this.state.list[0].images)? 
      <div className="flexBox">{
        this.state.list.map(item => {
          return(
          <div >
            <ArtistInfo content = {item}/>
          </div> ) 
       })}
       </div> :[]}
      </Fragment>   
  )
}
}

class App extends Component {
  constructor() {
    
    super();
    this.state = {
      serverData: {},
      filterString: ''
    }
  }
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken)
      return;
    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json())
    .then(data => this.setState({
      user: {
        name: data.display_name
      }
    }))
  }
  render() {
    let playlistToRender = 
      this.state.user && 
      this.state.playlists 
        ? this.state.playlists.filter(playlist => 
          playlist.name.toLowerCase().includes(
            this.state.filterString.toLowerCase())) 
        : []
    return (
      <div className="App">
        {this.state.user ?
        <div>
          <h1>
            I feel like searching for
          </h1>
          <ArtistSearch/>
          {/* <ArtistInfo/> */}
         </div> : <button onClick={() => {
            window.location = window.location.href.includes('localhost') 
              ? 'https://music-search-backend.herokuapp.com/login' 
              : 'https://music-search-backend.herokuapp.com/login' }
          }
          className="signinBtn">Sign in with Spotify</button>
        }
      </div>
      
    );
  }

}


export default App;