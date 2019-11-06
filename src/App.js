import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect

} from 'react-router-dom';


// app components

import Search from './Components/Search';
import Nav from './Components/Nav';
import Gallery from './Components/Gallery';
import PageNotFound from './Components/PageNotFound'; 
import axios from 'axios';
import apiKey from './config';


class App extends Component {
  // cosntructor to store state
  constructor(){
    super();
    // set initial state
    this.state = {
      photos: [],
      search:'',
      isLoading: true
    };
  }
    componentDidMount() {
      this.setLoading(); 
      let path = window.location.pathname 
      
      if (path === '/') {
        this.performSearch("nature");
      } else {
        this.performSearch(path.slice(8))
      }
      
    }

    performSearch = (query) => {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }

    setLoading = () => {
      this.setState({ isLoading: true}); 
    }

// app render
 render() {
  console.log(this.state.photos);
  return (
    <BrowserRouter>
     <div>
        <div className="container">
          <Search onSearch={this.performSearch}/>
          <Nav onSearch={this.performSearch}/>
          {
            (this.state.isLoading) 
            ? <h3>Loading...</h3>
            :
            <Switch>
              <Route exact path="/" render={ () => <Redirect to={`/search/nature`}/>} />
              <Route exact path="/search/:general" render={(props) => <Gallery {...props} photos={this.state.photos} />} />
              <Route component={PageNotFound}/>
            </Switch>
          }
        </div>
     </div>
    </BrowserRouter>
    
  );
   }
  
}

export default App;


