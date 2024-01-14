
import About from '../about/about';
import './about-main.scss';

const AboutMain = ({ title, isMargin40Px }) => {
    return (
        <div className="about-main">
            <div className="about-main__wrapper">
               <About title={ title } isMargin40Px={ isMargin40Px }/>
            </div>
        </div>
    )
}

export default AboutMain;