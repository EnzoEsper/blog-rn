import { useContext } from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { Context as BlogContext } from '../context/BlogContext';
import { useNavigation } from '@react-navigation/native';

function CreateScreen() {
  const navigation = useNavigation();
  const { addBlogPost } = useContext(BlogContext);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          navigation.navigate('Index');
        });
      }}
    />
  );
}

export default CreateScreen;
