#!/bin/bash
mkdir $1
echo "/**
 * @componentName $1
 * 
 * @component
 * 
 * @author @Gabriel
 * 
 * @prop @{propType} {propName} - @{propDescription}
 * 
 * @example
 * // Example usage
 * <@componentName {propName}="@{propExampleValue}" />
 * 
 * @description @{componentDescription}
 * 
 * @see {IfApplicable}
 * 
 * @todo @{componentTodo} (Leave blank unless instructed otherwise)
 * 
 * @lastUpdated @{lastUpdatedDate} 
 * 
 */

import React from 'react';
import styles from './$1.module.scss';

const $1 = () => {
  return (
    <div className={styles.$1}>
      {/* Your component code here */}
    </div>
  );
};

export default $1;" > $1/$1.tsx

echo "@import '../../global';

.$1 {
  /* Your styles here */
}" > $1/$1.module.scss
