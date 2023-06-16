/**
 * 
 * App Component
 * 
 * @component
 * 
 * @author Gabriel
 * 
 * @example
 * // Example usage
 * <App />
 * 
 * @overview The App component is the main entry point of the application. 
 * It uses the react-router library to implement routing, 
 * with the Router component wrapping the entire app and Routes component containing the Route components for each page.
 * The User component is displayed on every page because it's outside the Routes component.aq1  §§              §                                                                                                                       
 * Each Route has a 'path' prop (the URL path) and an 'element' prop (the component to render for that path).
 * 
 * @lastUpdated 2023-06-14
 * 
 */

// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { User }from './components/User/User'
import { Home } from './components/Home/Home';
import Blog from './components/Blog/Blog';
import BlogHolder from './components/BlogHolder/BlogHolder';
import Editor from './components/Editor/Editor';

// These can be replaced with your actual components for each route
function Profile() {
    return <h2>Profile</h2>;
}

function AboutUs() {
    return <h2>About Us</h2>;
}

function App() {
    return (
        <div className={styles.App}>
            <Router>
                <header className={styles['App-header']}>
                    <User />
                </header>
                <main className={styles['App-main']}> {/* Add this class to your scss */}
                    <Routes>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/blog" element={<BlogHolder />} />
                        <Route path="/editor" element={<Editor />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
