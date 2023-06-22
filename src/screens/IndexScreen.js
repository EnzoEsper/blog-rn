import { useContext } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

function IndexScreen() {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.icon} name="trash-2" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
