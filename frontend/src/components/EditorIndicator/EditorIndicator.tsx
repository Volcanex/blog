/**
 * EditorIndicator Component
 * 
 * @component
 * 
 * @author Gabriel
 * 
 * @prop {'idle' | 'success' | 'error'} status - The current status of the component loading process.
 * @prop {string} message - The message to display alongside the status.
 * 
 * @example
 * // Example usage
 * <EditorIndicator status="success" message="Component loaded successfully!" />
 * 
 * @description The EditorIndicator component is used to indicate the status of a component loading process. 
 * It receives a `status` prop that can be 'idle', 'success', or 'error', and a `message` prop to display 
 * a custom message. Depending on the `status`, a different icon (✔️ for success, ✗ for error, ? for idle) 
 * is displayed before the message.
 * 
 * @lastUpdated 2023-06-14
 * 
 */

import React from 'react';
import styles from './EditorIndicator.module.scss';

interface EditorIndicatorProps {
  status: 'idle' | 'success' | 'error';
  message: string;
}

const EditorIndicator: React.FC<EditorIndicatorProps> = ({ status, message }) => {
  let statusIcon;
  switch (status) {
    case 'success':
      statusIcon = '✔️';
      break;
    case 'error':
      statusIcon = '✗';
      break;
    case 'idle':
      statusIcon = '?';
      break;
    default:
      statusIcon = '-';
      break;
  }

  return (
    <div className={styles.container}>
      <p>{statusIcon} {message || "Waiting for input"}</p>
    </div>
  );
};

export default EditorIndicator;

