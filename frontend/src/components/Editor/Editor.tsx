/**
 *
 * Editor Component
 * @component
 *
 * @author Gabriel
 *
 * @description The Editor component is responsible for editing and previewing a blog post. It consists of an editor form
 * and a JSON editor. The user can modify the blog post data using the editor form, and the changes are reflected in
 * the JSON editor. The component also includes a preview section that renders the blog post using the Blog component.
 *
 * @see EditorForm - For the component that provides the form to edit the blog post.
 * @see EditorJSON - For the component that displays the JSON representation of the blog post data.
 * @see Blog - For the component that renders the preview of the blog post.
 *
 * @example 
 * // Example usage 
 * <Editor />
 *
 * @todo 
 * 
 * @lastUpdated 2023-06-14
 *
 */


import React, { useState } from 'react';
import styles from './Editor.module.scss';
import EditorForm from '../EditorForm/EditorForm';
import EditorJSON from '../EditorJSON/EditorJSON';
import Blog from '../Blog/Blog';
import { BlogProps } from '../Blog/Blog';


const Editor = () => {
  const [blogData, setBlogData] = useState<BlogProps | null>(null);

  const handleJSONChange = (newJson: any) => {
    // Only update the blog data if the new JSON has the required properties
    if ('postName' in newJson && 'components' in newJson) {
      setBlogData(newJson);
    }
  };

  return (
    <div className={styles.Editor}>
      <EditorForm />
      <EditorJSON onJSONChange={handleJSONChange} />
      {blogData && <Blog data={blogData} />}
    </div>
  );
};

export default Editor;