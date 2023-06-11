import React from 'react';
import styles from './Paragraph.module.scss';


// HeaderProps defines the prop types for the Header component
interface ParagraphProps {
  text?: string;
}

// Header is a React Function Component with props of type HeaderProps
const Header: React.FC<ParagraphProps> = ({ text = 'Default Paragraph Text' }) => {
  return (
    <div className={styles.container}>
      <p>{text}</p>
    </div>
  );
};

export default Header;
