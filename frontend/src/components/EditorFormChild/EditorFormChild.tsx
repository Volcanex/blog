import React, { useEffect, useState } from 'react';
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

  const requiredProps = Object.entries(componentProps)
    .filter(([propName, propData]) => propData.required)
    .map(([propName, propData]) => `${propName}: ${propData.type.name}`);

  return (
    <div className={styles.EditorFormChild}>
      <h2>{componentName}</h2>
      <p>
        Required Props: {requiredProps.length > 0 ? requiredProps.join(', ') : 'None'}
      </p>
      {/* Render other component information as needed */}
    </div>
  );
};

export default EditorFormChild;
