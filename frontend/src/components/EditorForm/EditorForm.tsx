import React, { useState } from 'react';
import EditorIndicator from '../EditorIndicator/EditorIndicator';
import EditorFormChild from '../EditorFormChild/EditorFormChild';
import styles from './EditorForm.module.scss';

const EditorForm = () => {
  const [componentName, setComponentName] = useState('');
  const [componentProps, setComponentProps] = useState<{ [key: string]: any } | null>(null);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleComponentNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newComponentName = event.target.value;
    setComponentName(newComponentName);
    setStatus('idle');
    setMessage('Loading...');

    import(`../${newComponentName}/${newComponentName}`)
      .then((ComponentModule) => {
        const propTypes = (ComponentModule.default as any).propTypes;
        const defaultProps = (ComponentModule.default as any).defaultProps;
        const props = propTypes || defaultProps;
        setComponentProps(props);
        setStatus('success');
        setMessage('Component exists!');
      })
      .catch((error) => {
        console.error('Failed to load component:', error);
        setComponentProps(null);
        setStatus('error');
        setMessage('Component failed to load or does not exist.');
      });
  };

  return (
    <div className={styles.EditorForm}>
      <div className={styles.ComponentNameInput}>
        <input type="text" value={componentName} onChange={handleComponentNameChange} />
        <EditorIndicator status={status} message={message} />
      </div>
      <EditorFormChild componentName={componentName} />

      {componentProps && Object.keys(componentProps).map((key) => (
        <div key={key}>
          <label>
            {key}
            <input type="text" name={key} />
          </label>
        </div>
      ))}
    </div>
  );
};

export default EditorForm;
