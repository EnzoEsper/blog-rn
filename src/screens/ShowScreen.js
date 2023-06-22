import { useNavigation, useRoute } from '@react-navigation/native';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

function ShowScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id;

  const { state } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  navigation.setOptions({
    headerRight: () => (
      <FontAwesome name="pencil" size={24} color="black" onPress={() => navigation.navigate('Edit', { id: id })} />
    ),
  });

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ShowScreen;
