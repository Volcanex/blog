import React, { useEffect, useState } from 'react';
import styles from './BlogHolder.module.scss';
import Blog, { BlogProps } from '../blog/blog';
import axios from 'axios';

interface BlogHolderProps {
  postNames: string[];
}

const BlogHolder: React.FC<BlogHolderProps> = ({ postNames }) => {
  const [blogData, setBlogData] = useState<BlogProps[] | null>(null);

  useEffect(() => {
    // Create an array of promises to fetch all the blog posts
    const fetchPromises = postNames.map(postName => {
      // Assuming your server is running on http://localhost:5000
      // and the postName is used as a parameter to fetch a specific post
      return axios.get(`http://localhost:5000/api/blogs/${postName}`);
    });

    // Fetch all the blog posts in parallel
    Promise.all(fetchPromises)
      .then(responses => {
        // Each response contains a blog post
        // So, map over responses to extract the data of each blog post
        const blogs = responses.map((response: any) => response.data);

        setBlogData(blogs);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, [postNames]);

  return (
    <div className={styles.container}>
      {/* Check if blogData is not null before rendering the Blog components */}
      {blogData && blogData.map((data, index) => <Blog key={index} data={data} />)}
    </div>
  );
};

export default BlogHolder;
