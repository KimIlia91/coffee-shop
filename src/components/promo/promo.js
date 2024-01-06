import Header from '../header/header'; 
import Divider from '../divider/divider';
import './promo.css';

const Promo = () => {
    return (
        <div className="app-info">
            <Header/>
            <div className="app-info__promo">
                <h1 className="app-info__title">Everything You Love About Coffee</h1>
                <Divider className={ "divider" } color={ "white" }/>
                <div className="app-info__subtitle">We makes every day full of energy and taste</div>
                <div className="app-info__text">Want to try our beans?</div>
                <a href='#' className="app-info__btn">More</a>
            </div>
        </div>
    );
}

export default Promo;