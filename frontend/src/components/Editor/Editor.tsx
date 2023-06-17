import React, { useState } from 'react';
import styles from './Editor.module.scss';
import EditorForm from '../EditorForm/EditorForm';
import EditorJSON from '../EditorJSON/EditorJSON';
import EditorMenu from '../EditorMenu/EditorMenu';
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
      <div className={styles.EditorLeftSide}>
        <div className={styles.EditorMenu}>
          <EditorMenu />
        </div>
        <div className={styles.EditorForm}>
          <EditorForm />
        </div>
        <div className={styles.EditorJSON}>
          <EditorJSON onJSONChange={handleJSONChange} />
        </div>
      </div>
      {blogData && (
        <div className={styles.Blog}>
          <Blog data={blogData} />
        </div>
      )}
    </div>
  );
};

export default Editor;
