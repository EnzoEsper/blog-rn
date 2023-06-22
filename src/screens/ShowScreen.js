import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

function ShowScreen() {
  const route = useRoute();
  const id = route.params.id;

  return (
    <View>
      <Text>Show Screen for post #{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ShowScreen;
