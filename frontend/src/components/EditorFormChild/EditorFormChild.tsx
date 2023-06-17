import React, { Component, useEffect, useState } from 'react';
import styles from './EditorFormChild.module.scss';

interface ComponentProps {
  [key: string]: any;
}

const EditorFormChild: React.FC<{ componentName: string }> = ({ componentName }) => {
  const [componentProps, setComponentProps] = useState<ComponentProps | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch('/componentProps.json')  // The public folder is the root of your static files
      .then((response) => response.json())
      .then((data) => {
        const componentData = data.find((component: ComponentProps) => component.displayName === componentName);
        if (componentData) {
          setComponentProps(componentData.props);
          setError('');
        } else {
          setComponentProps(null);
          setError(`Component "${componentName}" not found.`);
        }
      })
      .catch((error) => {
        console.error('Failed to fetch componentProps.json:', error);
        setError('Failed to fetch component information.');
      });
  }, [componentName]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!componentProps) {
    return <div>Loading component information...</div>;
  }

  const propsList = Object.entries(componentProps).map(([propName, propData]) => (
    <p key={propName}>
      {propName}: {propData.type.name}
    </p>
  ));

  return (
    <div className={styles.EditorFormChild}>
      <h2>{componentName}</h2>
      <div>
        <h3>Props:</h3>
        {propsList}
      </div>
    </div>
  );
};

export default EditorFormChild;
