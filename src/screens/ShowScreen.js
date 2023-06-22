import { useRoute } from '@react-navigation/native';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

function ShowScreen() {
  const route = useRoute();
  const id = route.params.id;

  const { state } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ShowScreen;
