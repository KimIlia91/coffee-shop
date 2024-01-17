import { Link } from 'react-router-dom';

import Header from '../header/header'; 
import Divider from '../divider/divider';
import './promo.scss';

const Promo = () => {
    return (
        <div className="promo">
            <Header/>
            <div className="promo__wrapper">
                <h1 className="promo__title">Everything You Love About Coffee</h1>
                <Divider className={ "divider" } color={ "white" }/>
                <h2 className="promo__subtitle">We makes every day full of energy and taste</h2>
                <h3 className="promo__text">Want to try our beans?</h3>
                <Link to='/coffee' className="promo__btn">More</Link>
            </div>
        </div>
    );
}

export default Promo;