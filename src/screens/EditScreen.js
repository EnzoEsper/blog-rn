import { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { useNavigation, useRoute } from '@react-navigation/native';
import BlogPostForm from '../components/BlogPostForm';

function EditScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id;
  const { state, editBlogPost } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => {
          navigation.goBack();
        });
      }}
    />
  );
}

export default EditScreen;
