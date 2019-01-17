import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export class Movie extends React.Component {
  constructor() {
    super();
  }

  render() {
    return( 
      <Card title = {this.props.title} >
        <Image
            style = {{width: '100%', height: '100%'}}
            resizeMode="cover"
            source={{uri: "https://image.tmdb.org/t/p/w342" + this.props.poster_path}}/>
        <Text> {this.props.overview} </Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>
    )
  }
}