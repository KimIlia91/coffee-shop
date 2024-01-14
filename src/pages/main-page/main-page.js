import { Fragment } from "react";
import Promo from "../../components/promo/promo";
import BestProducts from "../../components/best-products/best-products";
import AboutText from "../../components/about-text/about-text";
import Footer from "../../components/footer/footer";
import './main-page.css';

const MainPage = () => {
    return (
        <Fragment>
            <Promo/>
            <div className="main-page__about">
                <AboutText title={ "About Us" } isMargin40Px={ true }/>
            </div>
            <BestProducts/>
            <Footer/>
        </Fragment>
    )
}

export default MainPage; 
