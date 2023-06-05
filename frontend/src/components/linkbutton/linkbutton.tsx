import { Link } from 'react-router-dom';
import React from 'react';
import styles from '../button/button.module.scss';  // Update the path to your button styles if needed
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
