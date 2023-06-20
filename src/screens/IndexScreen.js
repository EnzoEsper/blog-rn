import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BlogContext } from '../context/BlogContext';

function IndexScreen() {
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen {value}</Text>
    </View>
  );
}

styles = StyleSheet.create({});

export default IndexScreen;
