import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import "../styles/footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a className="iconsFooter" href="https://www.instagram.com/ziebertphotography/">
                    <InstagramIcon /> 
                </a>
                <a className="iconsFooter" href="https://www.linkedin.com/in/nicholas-ziebert/">
                    <LinkedInIcon />
                </a>
                <a className="iconsFooter" href="https://www.flickr.com/people/156990096@N08/">
                    <PhotoCameraIcon />
                </a>
            </div>
            <p> &copy; 2023 ZiebertPhotography.com</p>
        </div>
    );
}

export default Footer;