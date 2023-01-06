import React from 'react'
import githubIcon from '../img/github.png'
import emailIcon from "../img/email.png"
import linkedinIcon from "../img/linkedin.png"


export default function Contact() {
    return (
        <div className="row bg-light">
            <div className="text-center">
                <h2>Contact</h2>
            </div>

            <div className="col d-flex justify-content-center">
                <a href="https://github.com/wrewsama">
                    <img src={githubIcon} className="rounded" alt="github icon" />
                </a>
            </div>

            <div className="col d-flex justify-content-center">
                <a href="mailto:andrewlzs512@gmail.com">
                    <img src={emailIcon} class="rounded" alt="email icon" />
                </a>
            </div>

            <div className="col d-flex justify-content-center">
                <a href="https://www.linkedin.com/in/andrewlozhisheng/">
                    <img src={linkedinIcon} class="rounded" alt="linkedin icon" />
                </a>
            </div>
            
        </div>
    )
}