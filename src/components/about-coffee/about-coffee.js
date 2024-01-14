import About from "../about/about";
import "./about-coffee.css";

const AboutCoffee = ({ src, alt, title }) => {
    return (
        <div className='about-coffee'>
            <div className="about-coffee__wrapper">
                <img src={ src } alt={ alt } />
                <About title={ title }/>
            </div>
        </div>
    )
}

export default AboutCoffee;