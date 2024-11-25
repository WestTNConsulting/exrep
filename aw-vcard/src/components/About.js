import NAJA from '../images/NAJA.png'
import LC from '../images/LC.png'
import Rotary from '../images/Rotary.png'


function About() {
    return (
        <div className="about">
            <h4 className="about-section-title">Community Involvement</h4>
            <a href="https://www.example.com" className="about-link">
                <img src={LC} alt="Profile" className="about-img" />
            </a>
            <a href="https://www.example.com" className="about-link">
                <img src={NAJA} alt="Profile" className="about-img" />
            </a>
            <a href="https://www.example.com" className="about-link">
                <img src={Rotary} alt="Profile" className="about-img" />
            </a>
           
        </div>
    );
}

export default About;
