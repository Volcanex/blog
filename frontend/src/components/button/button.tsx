/**
 *
 * Button Component
 *
 * @component
 *
 * @description  The Button component is a reusable component for rendering buttons in a React application. It provides customizable
 * styling and optional click handlers. The component supports different button types and can be used in various scenarios.
 *
 * @example
 * // Example usage
 * <Button isActive={false} handleClick={() => console.log("Button clicked")} label="Click Me" />
 *
 * @props {boolean} isActive - Specifies whether the button is active or not.
 * @props {Function} handleClick - (Optional) Callback function to handle button click event.
 * @props {string} label - The label text for the button.
 * @props {boolean} isUsernameButton - (Optional) Specifies if the button is a username button.
 * @props {React.ReactNode} children - (Optional) React node elements to be rendered inside the button.
 * @props {Function} onClick - (Optional) Callback function to handle button click event.
 * @props {React.CSSProperties} style - (Optional) Custom styles to be applied to the button.
 * @props {string} tag - (Optional) Additional CSS class to be applied to the button for specific styling.
 *
 */

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
