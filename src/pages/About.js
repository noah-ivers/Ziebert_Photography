import React from 'react';
import "../styles/about.css"
import aboutImage from "../images/DSC00886-2.JPG"


function About() {

    return (
        <div >
            <div className='aboutSections'>
                <div className='aboutBio'>
                    <h1> Im Nick Ziebert </h1>
                <p>
                <br></br>
                A senior at the University of Michigan and a freelance photographer from Chicago IL. I shoot sports, senior photos, private events, graduation photos, nature, and weddings, but my passion lies within capturing people’s honest emotions.
                <br></br>
                <br></br>
                My camera has become my passport to exploring the world's natural wonders. From the mountains of Vail Colorado to the serene shores of Hawaii, my camera is how I feel a deep connection to the earth's beauty. Through my lens, I strive to share the awe and bliss I experienced in those quiet moments of solitude amidst nature's wonder.
                <br></br>
                <br></br>
                People are my passion, and there's an honesty in candid shots that reveal the true essence of human connections. I found myself capturing laughter, tears, excitement, and the simple shared moments that build the foundation of cherished memories. I hope to give people a token for those memories. 
                <br></br>
                <br></br>
                For any business inquiries, please reach out to nziebert@umich.edu, and you will receive a response within 24 hours.
                </p>
                </div>
                <div className='aboutPicture'>
                    <img src={aboutImage} alt = "Nicholas Ziebert"/>
                </div>
            </div>
        </div>
    )
}

export default About