import Divider from '../divider/divider';
import './about-text.css';

const AboutText = ({ title, isMargin40Px }) => {
    const className = isMargin40Px ? 'about-text__text about-text__text_40' : `about-text__text`;

    return (
        <div className="about-text__descr">
            <div className={"about-text__title"}>{ title }</div>
            <Divider className={ "divider" } color={ "black" }/>
            <div className={ className }>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            <br /><br />
            Afraid at highly months do things on at. Situation <br /> recommend objection do intention <br />
            so questions. <br />
            As greatly removed calling pleased improve an. Last ask him cold feel <br />
            met spot shy want. Children me laughing we prospect answered followed. At it went <br />
            is song that held help face.
            </div>
        </div>
    )
}

export default AboutText;