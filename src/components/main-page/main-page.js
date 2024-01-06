import { Fragment } from "react";
import Promo from "../promo/promo";
import BestProducts from "./best-products/best-products";
import AboutText from "../about-text/about-text";
import Footer from "../footer/footer";
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
