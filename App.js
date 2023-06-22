import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={IndexScreen} options={{ title: 'Blogs' }} />
        <Stack.Screen name="Show" component={ShowScreen} options={{ title: 'Blog Post' }} />
        <Stack.Screen name="Create" component={CreateScreen} options={{ title: 'Create Post' }} />
        <Stack.Screen name="Edit" component={EditScreen} options={{ title: 'Edit Post' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
