/**
 * EditorForm Component
 * 
 * @component
 * 
 * @author Gabriel
 * 
 * @example
 * // Example usage
 * <EditorForm />
 * 
 * @overview The EditorForm component is a dynamic form for editing components. It uses a text input field for the user 
 * to specify the name of a component. The component is then dynamically imported and the form fields are generated 
 * based on the `propTypes` or `defaultProps` of the component. Additionally, an EditorIndicator is used to provide 
 * the status of the component import. The component supports 'idle', 'success', and 'error' states.
 * 
 * @see Editor - For parent component
 * 
 * @todo Add support for form generation from props list compiled from JSDOC prop descriptions
 * 
 * @lastUpdated 2023-06-14
 * 
 */


import React, { useState } from 'react';
import EditorIndicator from '../EditorIndicator/EditorIndicator';
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
        // Retrieve the propTypes (or defaultProps, depending on how you've defined your component properties)
        // Note: This requires your components to define propTypes or defaultProps
        const propTypes = (ComponentModule.default as any).propTypes;
        const defaultProps = (ComponentModule.default as any).defaultProps;
        const props = propTypes || defaultProps;
        setComponentProps(props);
        setStatus('success');
        setMessage('Component loaded successfully!');
      })
      .catch((error) => {
        // The component doesn't exist or failed to load
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
