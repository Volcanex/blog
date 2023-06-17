/**
 * StylerButton Component
 * 
 * @component
 * 
 * @author Gabriel
 * 
 * @example
 * // Example usage
 * <StylerButton />
 * 
 * @description  The StylerButton component is a color picker that can change the color theme of the application 
 * on the fly. It includes a list of colors, a button for each color to reset it to its default, and another button 
 * to open a color picker to choose a new color.
 * 
 * @lastUpdated 2023-06-14
 * 
 */

// src/components/StylerButton/StylerButton.tsx
import React, { useState } from 'react';
import { SketchPicker, ColorResult } from 'react-color';
import Button from '../Button/Button';
import styles from './StylerButton.module.scss';

const colors = [
  { name: 'primary-color', defaultName: 'default-primary-color' },
  { name: 'secondary-color', defaultName: 'default-secondary-color' },
  { name: 'tertiary-color', defaultName: 'default-tertiary-color' },
  { name: 'quaternary-color', defaultName: 'default-quaternary-color' },
  { name: 'fifth-color', defaultName: 'default-fifth-color' }
];

const StylerButton: React.FC = () => {
    const [colorPickerColor, setColorPickerColor] = useState<string>('');
    const [activeColor, setActiveColor] = useState<string | null>(null);

    const handleColorChange = (color: ColorResult) => {
        setColorPickerColor(color.hex);
        document.documentElement.style.setProperty(`--${activeColor}`, color.hex);
    };

    const openColorPicker = (color: string) => {
        const currentColor = getComputedStyle(document.documentElement)
            .getPropertyValue(`--${color}`).trim();
        setColorPickerColor(currentColor);
        setActiveColor(color);
    };

    const closeColorPicker = () => {
        setActiveColor(null);
    };

    const resetColor = (color: string, defaultColor: string) => {
        const defaultColorValue = getComputedStyle(document.documentElement)
            .getPropertyValue(`--${defaultColor}`).trim();
        document.documentElement.style.setProperty(`--${color}`, defaultColorValue);
    };

    return (
        <div className={styles.container}>
            {colors.map(color => (
                <div className={styles.buttons}>
                    <Button 
                        isActive={false} 
                        handleClick={() => resetColor(color.name, color.defaultName)} 
                        label="‎" 
                        tag={color.name}
                        style={{ backgroundColor: `var(--${color.name})` }} 
                    />
                    <Button 
                        isActive={false} 
                        handleClick={() => openColorPicker(color.name)} 
                        label={`Change ${color.name.split('-')[0].charAt(0).toUpperCase() + color.name.split('-')[0].slice(1)} Color`} 
                    />
                </div>
            ))}
            {activeColor && (
                <div>
                    <Button label="Close" handleClick={closeColorPicker} isActive={false} />
                    <SketchPicker color={colorPickerColor} onChange={handleColorChange} />
                </div>
            )}
        </div>
    );
};

export default StylerButton;
