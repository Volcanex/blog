// src/components/button/button.tsx
import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

interface buttonProps {
    isActive: boolean;
    handleClick?: () => void;
    label: string;
    isUsernameButton?: boolean;
    children?: React.ReactNode; // add this line
    onClick?: () => void; // add this line
}

const Button: React.FC<buttonProps> = ({ isActive, handleClick, label, isUsernameButton }) => {
    const onClickHandler = () => {
        if (handleClick) {
            handleClick();
        }
    };

    return (
        <button
            className={classNames(
                styles.button,
                isActive && styles.active,
                isActive && styles.clicked,
                isUsernameButton && styles.UsernameButton
            )}
            onClick={onClickHandler} // Updated to use the new handler
        >
            {label}
        </button>
    );
};

export default Button;
