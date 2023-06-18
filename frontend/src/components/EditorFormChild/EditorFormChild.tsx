import React, { useEffect, useState } from 'react';
import styles from './EditorFormChild.module.scss';
import Button from '../Button/Button';
interface ComponentProps {
  [key: string]: any;
}

interface OutputProps {
  [key: string]: any;
}

const EditorFormChild: React.FC<{ componentName: string }> = ({ componentName }) => {
  const [componentProps, setComponentProps] = useState<ComponentProps | null>(null);
  const [outputProps, setOutputProps] = useState<OutputProps>({});
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    fetch('/componentProps.json')  // The public folder is the root of your static files
      .then((response) => response.json())
      .then((data) => {
        const componentData = data.find((component: ComponentProps) => component.displayName === componentName);
        if (componentData) {
          setComponentProps(componentData.props);
          setError('');
          // Initialize outputProps with the names of the component's props
          const initialOutputProps: OutputProps = {};
          for (let propName in componentData.props) {
            initialOutputProps[propName] = '';
          }
          setOutputProps(initialOutputProps);
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
    <div key={propName}>
      <label>
        {propName} ({propData.type.name}):
        <input
          type="text"
          onChange={(e) => setOutputProps(prevProps => ({ ...prevProps, [propName]: e.target.value }))}
          value={outputProps[propName]}
        />
      </label>
    </div>
  ));

  // Update the output JSON with your format
  const outputJson = JSON.stringify({
    componentType: componentName,
    props: outputProps
  }, null, 2);

  const handleCopyJson = () => {
    navigator.clipboard.writeText(outputJson).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 0); // reset after 2 seconds
    });
  }

  return (
    <div className={styles.EditorFormChild}>
      <h2>{componentName}</h2>
      <div>
        <h3>Props:</h3>
        {propsList}
      </div>
      <div>
        <h3>Generated JSON:</h3>
        <Button isActive={copied} handleClick={handleCopyJson} label="Copy" />
        <label className={styles.jsonLabel}>
          {outputJson}
        </label>
      </div>
    </div>
  );
};

export default EditorFormChild;
