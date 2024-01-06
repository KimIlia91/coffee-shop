import AppSearchPanel from "../search-panel/app-search-panel";
import About from "../about/about";
import AppFilter from "../filter/app-filter";
import CoffeeList from "../coffee-list/coffee-list";
import Footer from "../footer/footer";
import Line from "../line/line";
import SubPromo from "../subpromo/subpromo";
import './coffee-page.css';

const CoffeePage = ({ data, filter, onUpdateFilter, onUpdateSearch }) => {
    return (
        <div className="coffee-page">
            <SubPromo title={ "Our Coffee" } imgUrl={ "/img/bg/coffee-shop-bg.png" }/>
            <About src={ '/img/girl.jpg' } alt={ "girl" } title={ "About our beans" }/>
            <Line/>
            <div className="coffee-page__control-panel">
                <AppSearchPanel onUpdateSearch={ onUpdateSearch }/>
                <AppFilter filter={ filter } onUpdateFilter={ onUpdateFilter }/>
            </div>  
            <CoffeeList data={ data }/>
            <Footer/>
        </div>
    )
}

export default CoffeePage;