import Promo from "../../components/promo/promo";
import BestProducts from "../../components/best-products/best-products";
import AboutMain from "../../components/about-main/about-main";
import Footer from "../../components/footer/footer";

const MainPage = () => {
    return (
        <>
            <Promo/>
            <AboutMain title={ "About Us" } isMargin40Px={ true }/>
            <BestProducts/>
            <Footer/>
        </>
    )
}

export default MainPage; 
