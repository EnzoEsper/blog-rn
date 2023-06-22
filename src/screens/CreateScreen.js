import { useContext } from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { Context as BlogContext } from '../context/BlogContext';

function CreateScreen() {
  const { addBlogPost } = useContext(BlogContext);

  return <BlogPostForm />;
}

export default CreateScreen;
