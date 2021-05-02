import React from 'react';
import about from '../img/cover.JPG';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Apurbo paul</span></h4>
                <p className="about-text">
                    I am always dedicated to my work.I always like to learn and take on new challenges.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Apurbo paul</p>
                        <p>: 20</p>
                        <p>: Bangladesh</p>
                        <p>: Bangle,English</p>
                        <p>: 416/2 iqbal road,west shewrapara</p>
                        <p>: Bangladesh</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1XBSbFbMpYtAZaaNTCkA0Y7j1T2ZoNb1P/view?usp=sharing" target="_blank"><button className="btn">Download Cv</button></a>
            </div>
        </div>
    )
}

export default ImageSection;
