import React from 'react';

interface BlogProps {
  className: string;
}

const Blog: React.FC<BlogProps> = ({ className }) => {
    return <p className={className}>Hello</p>;
}

export default Blog;
