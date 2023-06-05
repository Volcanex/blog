// src/components/button/button.tsx
import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

interface buttonProps {
    isActive: boolean;
    handleClick: () => void;
    label: string;
    isUsernameButton?: boolean;
}

const button: React.FC<buttonProps> = ({ isActive, handleClick, label, isUsernameButton }) => {
    return (
        <button
            className={classNames(
                styles.button,
                isActive && styles.active,
                isActive && styles.clicked,
                isUsernameButton && styles.UsernameButton
            )}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default button;
