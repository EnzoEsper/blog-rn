import { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

function IndexScreen() {
  const { state, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <Feather style={styles.icon} name="trash-2" />
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
