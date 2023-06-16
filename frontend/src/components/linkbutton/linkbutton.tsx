/**
 * LinkButton Component
 * 
 * @component
 * 
 * @author Gabriel
 * 
 * @prop {string} to - The path to link to.
 * @prop {string} label - The text label of the button.
 * @prop {boolean} [isActive] - Flag indicating if the button is currently active.
 * @prop {string} [className] - Extra CSS class(es) to apply to the button.
 * 
 * @example
 * // Example usage
 * <LinkButton to="/my-path" label="Go to my path" isActive={true}/>
 * 
 * @overview The LinkButton component is a button that also acts as a link to a specified path. 
 * It's styled with optional active state.
 * 
 * @lastUpdated 2023-06-14
 * 
 */

import { Link } from 'react-router-dom';
import React from 'react';
import styles from '../Button/Button.module.scss';  // Update the path to your button styles if needed
import classNames from 'classnames';

export interface LinkButtonProps {
    to: string;
    label: string;
    isActive?: boolean;
    className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ to, label, isActive, className }) => {
    const buttonClass = classNames(styles.button, {
        [styles.active]: isActive,
        [className as string]: className,
    });

    return (
        <Link to={to} className={buttonClass}>
            {label}
        </Link>
    );
};
