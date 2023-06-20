import { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  // const blogPosts = [{ title: 'Blog Post #1' }, { title: 'Blog Post #2' }];
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
  };

  return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>;
};
