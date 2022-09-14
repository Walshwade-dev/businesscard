import React from "react";
import Image from './components/Image.js';
import About from './components/About.js';
import Footer from './components/Footer.js';
import ParticlesControl from './components/ParticlesControl.js';

function App() {
    return (
        <div className="main">
            <ParticlesControl />
            <Image />
            <About />
            <Footer />

        </div>
    )
}

export default App;