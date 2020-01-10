import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({navigation}) => {
  console.log(navigation.getParam('id'));
  const {state} = useContext(Context);

  const blogPost = state.find(blog => blog.id == navigation.getParam('id'));

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

export default ShowScreen;
