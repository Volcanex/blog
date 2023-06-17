/**
 *
 * BlogHolder Component
 *
 * @component
 *
 * @description The BlogHolder component is responsible for rendering multiple blog posts. It fetches blog data from an API endpoint
 * and displays each blog using the Blog component. The component handles loading states and error handling to provide a seamless
 * user experience.
 *
 * @see Blog - For the component that renders individual blog posts.
 *
 * @example
 * // Example usage
 * <BlogHolder />
 *
 * @lastUpdated 2023-06-14
 *
 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog, { BlogProps } from '../Blog/Blog';
import styles from './BlogHolder.module.scss';

const BlogHolder = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/blogs')
      .then(response => {
        if(response.data.length === 0){
          setError("Connected! No data?");
        }else{
          setBlogs(response.data);
        }
      })
      .catch(error => {
        setError(error.message);  // set the error state if there was an error fetching data
      });
  }, []);

  return (
    <div className={styles.container}>
      {error ? (
        <p>{error}</p>  // if there's an error, display it
      ) : (
        blogs.map((blogData, index) => (
          <Blog key={index} data={blogData} />
        ))
      )}
    </div>
  );
};

export default BlogHolder;
