import { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { FlatList } from 'react-native';

function IndexScreen() {
  const { state, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}

styles = StyleSheet.create({});

export default IndexScreen;
