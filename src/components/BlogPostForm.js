import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
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
        title="Save blog post"
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
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

export default BlogPostForm;
