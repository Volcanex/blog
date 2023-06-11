// src/components/Button/Button.tsx
import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface buttonProps {
    isActive: boolean;
    handleClick?: () => void;
    label: string;
    isUsernameButton?: boolean;
    children?: React.ReactNode; // add this line
    onClick?: () => void; // add this line
    style?: React.CSSProperties; // add this line
    tag?: string;
}

const Button: React.FC<buttonProps> = ({ isActive, handleClick, label, isUsernameButton, style, tag }) => {
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
                isUsernameButton && styles.UsernameButton,
                tag && styles[tag] // add this line
            )}
            onClick={onClickHandler} // Updated to use the new handler
            style={style} // add this line
        >
            {label}
        </button>
    );
};

export default Button;
