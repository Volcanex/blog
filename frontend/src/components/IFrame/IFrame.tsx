/**
 * IFrame Component
 * 
 * @component
 * 
 * @author Gabriel
 * 
 * @prop {string} url - The source URL of the iframe.
 * @prop {string} width - The width of the iframe.
 * @prop {string} height - The height of the iframe.
 * 
 * @example
 * // Example usage
 * <IFrame url="https://example.com" width="100%" height="600px"/>
 * 
 * @description  The IFrame component is a simple wrapper around the HTML iframe element, 
 * providing an encapsulated way to include an external webpage within the current document.
 * 
 * @lastUpdated 2023-06-14
 * 
 */

import React from 'react';
import styles from './IFrame.module.scss';

// make width and height optional (works anyway?)
interface IFrameProps {
  url: string;
  width: string;
  height: string; 
}

const IFrame: React.FC<IFrameProps> = ({ url, width, height }) => {
  return (
    <div className={styles.container}>
      <iframe src={url} title="Embedded Content" width={width} height={height}/>
    </div>
  );
};

export default IFrame;
