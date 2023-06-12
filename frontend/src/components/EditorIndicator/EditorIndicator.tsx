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
      <p>{statusIcon} {message || "Waiting for JSON input..."}</p>
    </div>
  );
};

export default EditorIndicator;

