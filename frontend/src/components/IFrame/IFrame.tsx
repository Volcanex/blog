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
