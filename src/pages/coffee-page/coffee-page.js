import AboutCoffee from "../../components/about-coffee/about-coffee";
import CoffeeList from "../../components/coffee-list/coffee-list";
import Footer from "../../components/footer/footer";
import Line from "../../components/line/line";
import SubPromo from "../../components/subpromo/subpromo";
import './coffee-page.scss';

const CoffeePage = () => {
    return (
        <div className="coffee-page">
            <SubPromo title={ "Our Coffee" } imgUrl={ "/img/bg/coffee-shop-bg.png" }/>
            <AboutCoffee src={ '/img/girl.jpg' } alt={ "girl" } title={ "About our beans" }/>
            <Line/>
            <CoffeeList/>
            <Footer/>
        </div>
    )
}

export default CoffeePage;