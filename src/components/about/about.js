import AboutText from '../about-text/about-text';
import "./about.css";

const About = ( { src, alt, title } ) => {
    return (
        <div className='about'>
            <div className="about__wrapper">
                <img src={ src } alt={ alt } />
                <AboutText title={ title }/>
            </div>
        </div>
    )
}

export default About;