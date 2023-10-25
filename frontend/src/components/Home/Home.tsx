/**
 * Home Component
 * 
 * @component
 * 
 * @author Gabriel
 * 
 * @example
 * // Example usage
 * <Home />
 * 
 * @description  The Home component is a simple component displaying the homepage content.
 * 
 * @see StylerButton - For the component displayed inside Home.
 * 
 * @lastUpdated 2023-06-14
 * 
 */

import React from 'react';
import StylerButton from '../StylerButton/StylerButton';

export const Home: React.FC = () => {
    return (
        <div>
            <h1>Home!</h1>
            <StylerButton />
        </div>
    );
};

export default Home;
