import { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { useNavigation, useRoute } from '@react-navigation/native';
import BlogPostForm from '../components/BlogPostForm';

function EditScreen() {
  const route = useRoute();
  const id = route.params.id;
  const { state } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return <BlogPostForm />;
}

export default EditScreen;
