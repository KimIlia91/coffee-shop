import Promo from "../../components/promo/promo";
import Footer from "../../components/footer/footer";
import AboutMain from "../../components/about-main/about-main";
import ErrorBoundry from '../../components/errorBoundry/ErrorBoundary';
import BestProducts from "../../components/best-products/best-products";

const MainPage = () => {
    return (
        <>
            <ErrorBoundry>
                <Promo/>
            </ErrorBoundry>
            <ErrorBoundry>
                <AboutMain title={ "About Us" } isMargin40Px={ true }/>
            </ErrorBoundry>
            <ErrorBoundry>
                <BestProducts/>
            </ErrorBoundry>
            <ErrorBoundry>
                <Footer/>
            </ErrorBoundry>
        </>
    )
}

export default MainPage; 
