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
            <header className={styles['App-header']}>
                <Router>
                    <User className={styles.navbar} />
                    <Routes>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/blog" element={<BlogHolder />} />
                        <Route path="/editor" element={<Editor />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </header>
        </div>
    );
}

export default App;
