/**
 * Header Component
 * 
 * @component
 * 
 * @author Gabriel
 * 
 * @prop {string} text - The text to display in the header.
 * 
 * @example
 * // Example usage
 * <Header text="This is a sample text"/>
 * 
 * @description  The Header component is a simple component that displays a single paragraph of text.
 * 
 * @lastUpdated 2023-06-16
 * 
 */

import React from 'react';
import styles from './Header.module.scss';

// HeaderProps defines the prop types for the Header component
interface HeaderProps {
  text?: string;
}

// Header is a React Function Component with props of type HeaderProps
const Header: React.FC<HeaderProps> = ({ text = 'Default Header Text' }) => {
  return (
    <div className={styles.container}>
      <h1>{text}</h1>
    </div>
  );
};

export default Header;
