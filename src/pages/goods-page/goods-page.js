import CoffeeList from "../../components/coffee-list/coffee-list";
import Footer from "../../components/footer/footer";
import SubPromo from "../../components/subpromo/subpromo";
import About from "../../components/about-coffee/about-coffee";
import Line from "../../components/line/line";
import './goods-page.scss';

const GoodsPage = () => {
    return (
        <div className="goods-page">
            <SubPromo title={ "For your pleasure" } imgUrl={ "/img/bg/goods-page-bg.png" }/>
            <div className='coffee-about'>
            <About src={ '/img/goods-page-img.png' } alt={ "goods-page-img" } title={ "About our goods" }/>
            <Line/>
            <div className="coffee-about__line_big"></div>
            <div className="coffee-about__control-panel">
            </div>  
                <CoffeeList disablePanel={ true }/>
            </div>
            <Footer/>
        </div>
    )
}

export default GoodsPage;