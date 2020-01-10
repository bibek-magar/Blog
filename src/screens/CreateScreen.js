import React, {useContext, useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import {Context} from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const {addBlogPost} = useContext(Context);

  return (
    <View>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={content => setContent(content)}
        value={content}
      />
      <Button
        title="Add blog post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    fontSize: 18,
    borderColor: 'blue',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    marginLeft: 5,
    fontSize: 20,
    marginBottom: 5,
  },
});
export default CreateScreen;
