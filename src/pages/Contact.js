import React from "react";
import "../styles/contact.css";
import ButtonMailto from "../components/emailbutton";
import photo1 from "../images/DSC06604.JPG";
import photo2 from "../images/DSC00846.JPG";
function Contact() {
  return (
      <div>
        <div>
            <h1 className="h1Contact">
                Contact Me
            </h1>
        </div>
        <div>
            Please Contact Me Through Email At <ButtonMailto className="linkstyle" label="nziebert@umich.edu" mailto="mailto:nziebert@umich.edu" />
        </div>
        <div className="contactContainer">
            <img className="photo1Contact" src={photo1} alt="NickZiebert"/>
            <img className="photo2Contact" src={photo2} alt="NickZiebert"/>
        </div>
      </div>
  )
}

export default Contact;