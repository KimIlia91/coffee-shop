import CoffeeList from "../coffee-list/coffee-list";
import Footer from "../footer/footer";
import SubPromo from "../subpromo/subpromo";
import About from "../about/about";
import Line from "../line/line";
import './goods-page.css';

const GoodsPage = ({ data }) => {
    return (
        <div className="goods-page">
            <SubPromo title={ "For your pleasure" } imgUrl={ "/img/bg/goods-page-bg.png" }/>
            <div className='coffee-about'>
            <About src={ '/img/goods-page-img.png' } alt={ "goods-page-img" } title={ "About our goods" }/>
            <Line/>
            <div className="coffee-about__line_big"></div>
            <div className="coffee-about__control-panel">
            </div>  
                <CoffeeList data={ data }/>
            </div>
            <Footer/>
        </div>
    )
}

export default GoodsPage;