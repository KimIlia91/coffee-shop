import { useState } from "react";
import AppSearchPanel from "../../components/search-panel/app-search-panel";
import AboutCoffee from "../../components/about-coffee/about-coffee";
import AppFilter from "../../components/filter/app-filter";
import CoffeeList from "../../components/coffee-list/coffee-list";
import Footer from "../../components/footer/footer";
import Line from "../../components/line/line";
import SubPromo from "../../components/subpromo/subpromo";
import './coffee-page.scss';

const CoffeePage = ({ filter, onUpdateFilter }) => {
    const [ searchTerm, setSearchTerm ] = useState('');

    const onUpdateSearchTerm = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
    }
    
    return (
        <div className="coffee-page">
            <SubPromo title={ "Our Coffee" } imgUrl={ "/img/bg/coffee-shop-bg.png" }/>
            <AboutCoffee src={ '/img/girl.jpg' } alt={ "girl" } title={ "About our beans" }/>
            <Line/>
            <div className="coffee-page__control-panel">
                <AppSearchPanel onUpdateSearchTerm={ onUpdateSearchTerm }/>
                <AppFilter filter={ filter } onUpdateFilter={ onUpdateFilter }/>
            </div>  
            <CoffeeList searchTerm={ searchTerm }/>
            <Footer/>
        </div>
    )
}

export default CoffeePage;