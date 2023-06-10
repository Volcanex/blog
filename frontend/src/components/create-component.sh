#!/bin/bash
mkdir $1
echo "import React from 'react';
import styles from './$1.module.scss';

const $1 = () => {
  return (
    <div className={styles.container}>
      {/* Your component code here */}
    </div>
  );
};

export default $1;" > $1/$1.tsx

echo "@import '../../global';

.$1 {
  /* Your styles here */
}" > $1/$1.module.scss
