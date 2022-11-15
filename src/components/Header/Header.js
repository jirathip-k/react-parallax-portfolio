import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Header.css';

import ModeButton from "../ModeButton";

export default function Header() {
    return (
    <header className="header">
        <nav className="nav social-media-icones-white">
            <div className="nav-items">
                <a href="https://www.github.com"><FontAwesomeIcon icon={faSquareGithub}></FontAwesomeIcon></a>
                <a href="https://www.github.com"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                <a href="https://www.github.com"><FontAwesomeIcon icon={faSquareEnvelope}></FontAwesomeIcon></a>
            </div>
            <div className='nav-buttons'>
                <ModeButton/>
            </div>
            
        </nav>
        
    </header>
    );
};