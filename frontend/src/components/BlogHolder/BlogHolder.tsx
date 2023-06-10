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
