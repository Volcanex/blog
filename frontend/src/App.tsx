// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { User } from './components/user/user';

// These can be replaced with your actual components for each route
function Profile() {
    return <h2>Profile</h2>;
}

function Play() {
    return <h2>Play</h2>;
}

function Messages() {
    return <h2>Messages</h2>;
}

function AboutUs() {
    return <h2>About Us</h2>;
}

function Home() {
    return <h2>Home</h2>;
}

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <Router>
                    <User className={styles.navbar} />
                    <Routes>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/play" element={<Play />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </header>
        </div>
    );
}

export default App;
