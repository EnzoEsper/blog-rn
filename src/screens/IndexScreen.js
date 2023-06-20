import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BlogContext } from '../context/BlogContext';
import { FlatList } from 'react-native';

function IndexScreen() {
  const blogPosts = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={blogPosts}
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
