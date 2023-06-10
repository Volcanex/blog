import React from 'react';
import Button from '../button/button';

export function Home() {
    const getRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const changeColors = () => {
        // Update the CSS variables with new random color values
        document.documentElement.style.setProperty('--primary-color', getRandomColor());
        document.documentElement.style.setProperty('--secondary-color', getRandomColor());
        document.documentElement.style.setProperty('--tertiary-color', getRandomColor());
        document.documentElement.style.setProperty('--quaternary-color', getRandomColor());
    };

    return (
        <div>
            <h1>Home!</h1>
            <Button isActive={false} handleClick={changeColors} label="Change Colors" />
        </div>
    );
}
