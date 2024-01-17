import Divider from "../divider/divider";
import './about.scss';

const About = ({ title, isMargin40Px }) => {
    const className = isMargin40Px ? 'about__text about-main__text_40' : `about__text`;
    return (
        <>
            <div className="about__descr">
                <h2 className={"about__title"}>{ title }</h2>
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
        </>
    )
}

export default About;