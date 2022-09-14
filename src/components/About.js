import React from "react";

export default function About() {
    return(
        <div className="info">
            <h1 className="name">Walshwade C.K. </h1>
            <h3 className="skill">Frontend Developer</h3>
            <p className="site">Wadekihohia.website</p>

            <section className="controls">
                <button id="email">
                <img src='./icons/Icon.png' alt='email' className='email-icon' />
                Email
                </button>

                <button id="linkedin">
                <img src='./icons/linkedin.png' alt='linkedin' className='linkedin-icon' />
                Linkedin
                </button>
            </section>

            <section className="section">
                <h1 className="about-header">About</h1>
                <p className="aboutme">
                    I am a Frontend developer with an interest in 
                    making things simple, along with automating 
                    daily tasks. I try to keep up with the security
                    and best practises, and am always looking for 
                    new things to learn.
                </p>

                <h1 className="intrsts-header">Interests</h1>
                <p className="hobbies">Music lover, Googling, Internet fan, Soccer & Fifa,
                   Entreprenuer, Nature & Culture lover, Traveler.
                </p>

            </section>
        </div>
    )
}