import { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { useNavigation, useRoute } from '@react-navigation/native';

function EditScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id;
  const { state } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text style={styles.label}>Edit Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
      <Text style={styles.label}>Edit Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
      <Button
        title="Edit Blog Post"
        onPress={() => {
          // addBlogPost(title, content, () => {
          //   navigation.navigate('Index');
          // });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default EditScreen;
