/**
 * User Component
 * 
 * @component
 * 
 * @author Gabriel
 * 
 * @prop {string} [className] - Extra CSS class(es) to apply to the component.
 * 
 * @example
 * // Example usage
 * <User className="my-class" />
 * 
 * @description  The User component represents a user interface in the navigation bar, 
 * which includes the user's profile picture, username, and navigation buttons.
 * It uses the LinkButton component to render these navigation buttons.
 * Each navigation button has an 'isActive' state, which can be toggled when clicked.
 * 
 * @lastUpdated 2023-06-14
 * 
 */

// src/components/user/User.tsx
import React, { useState } from 'react';
import styles from './User.module.scss';
import classNames from 'classnames';
import { LinkButton } from '../LinkButton/LinkButton';

export interface UserProps {
    className?: string;
}

export const User = ({ className }: UserProps) => {
    const [isActive, setActive] = useState<Record<string, boolean>>({});

    const handleClick = (buttonName: string) => {
        setActive({ [buttonName]: true });
    };

    return (
        <div className={classNames(styles.root, className)}>
            <nav className={classNames(styles.navbar, styles.navbar)}>
                <div className={classNames(styles.profileSection)}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        className={styles.profileImg}
                    />
                    <h2 className={styles.username}>Volcanex</h2>

                </div>
                <div className={classNames(styles.navButtons)}>
                <LinkButton
                        to="/"
                        isActive={isActive['Profile']}
                        label="Home"
                    />
                    <LinkButton
                        to="/profile"
                        isActive={isActive['Profile']}
                        label="Profile"
                    />
                    <LinkButton
                        to="/blog"
                        isActive={isActive['Blog']}
                        label="Blog"
                    />
                    <LinkButton
                        to="/editor"
                        isActive={isActive['Editor']}
                        label="Editor"
                    />
                    <LinkButton
                        to="/about-us"
                        isActive={isActive['About us']}
                        label="About us"
                    />
                </div>
            </nav>
        </div>
    );
};
