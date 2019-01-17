import {Movie} from './Movie.js';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      listMovies:[],
      loading: false,
      page: 0,
    }
    //this.fetchWithPage = this.fetchWithPage.bind(this);
  }

  //loadMore = function() {
    //const newPage = this.state.page+1;
    //await this.fetchWithPage(newPage);
    //this.loadMore = this.loadMore.bind(this);
  //}

  //async fetchWithPage() {

  //}

  async componentDidMount() {
    const apiUrl = "https://api.themoviedb.org/3/movie/";
    const movie_endpoint = "now_playing";
    const apiKey = "99846e28fc271111f758a8e9c8486d0b";
    
    try {
      const response = await fetch(`${apiUrl}${movie_endpoint}?api_key=${apiKey}`);
      const data = await response.json();
      console.log("The data is loaded correctly!");
      this.setState({
        listMovies: data.results, 
        loading: false
      })
    } catch(error) {
      console.log("Data is not fetched successfully!");
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <Text> Welcome to my application </Text>
          {this.state.listMovies.map((movie) => {
            return (
              <Movie
                title = {movie.title}
                poster_path = {movie.poster_path}
                overview = {movie.overview}
              />
            )
          })
          }
        </View>
    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
