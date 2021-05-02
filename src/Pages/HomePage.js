import React from 'react';
import {faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Apurbo paul</span>
                </h1>
                <p className="h-sub-text">
                I am a professional web developer.I am a front end developer but I have also ideas in backend development. I feel very comfortable working with java script framework React. But if I need to work, I can learn any framework of java script in a short time. I learned MongoDB and Node to work in the backend. 
                </p>
                <div className="icons">
                   <a href="https://www.facebook.com/ratr.tr.9/" className="icon-holder" target="_blank">
                   <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                   </a>
                    <a href="https://github.com/Apurbopaul131" className="icon-holder" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://www.linkedin.com/in/apurbo-paul-633884191" className="icon-holder" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="icon yt"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
