/**
 * @componentName EditorMenu
 * 
 * @component
 * 
 * @author @Gabriel
 * 
 * @prop @{propType} {propName} - @{propDescription}
 * 
 * @example
 * // Example usage
 * <@componentName {propName}=@{propExampleValue} />
 * 
 * @description @{componentDescription}
 * 
 * @see {IfApplicable}
 * 
 * @todo @{componentTodo} Write the comment
 * 
 * @lastUpdated @{lastUpdatedDate} 
 * 
 */


import React from 'react';
import styles from './EditorMenu.module.scss';
import Button from '../Button/Button';

const EditorMenu = () => {
  return (
    <div className={styles.EditorMenu}>
      <Button 
        isActive={false}
        handleClick={() => {}}
        label="JSON"
        isUsernameButton={false}
      />
      <Button 
        isActive={false}
        handleClick={() => {}}
        label="Visual"
        isUsernameButton={false}
      />
      <Button 
        isActive={false}
        handleClick={() => {}}
        label="Reset"
        isUsernameButton={false}
      />
      {/* Add more buttons here */}
    </div>
  );
};

export default EditorMenu;
