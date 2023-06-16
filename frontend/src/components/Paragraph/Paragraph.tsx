/**
 * Paragraph Component
 * 
 * @component
 * 
 * @author Gabriel
 * 
 * @prop {string} [text] - The text to display in the paragraph.
 * 
 * @example
 * // Example usage
 * <Paragraph text="This is a sample text"/>
 * 
 * @overview The Paragraph component is a simple component that displays a single paragraph of text.
 * 
 * @lastUpdated 2023-06-14
 * 
 */

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
