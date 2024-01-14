import AppSearchPanel from "../../components/search-panel/app-search-panel";
import About from "../../components/about/about";
import AppFilter from "../../components/filter/app-filter";
import CoffeeList from "../../components/coffee-list/coffee-list";
import Footer from "../../components/footer/footer";
import Line from "../../components/line/line";
import SubPromo from "../../components/subpromo/subpromo";
import './coffee-page.css';
import { useState } from "react";

const CoffeePage = ({ filter, onUpdateFilter }) => {
    const [ searchTerm, setSearchTerm ] = useState('');

    const onUpdateSearchTerm = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
    }
    
    return (
        <div className="coffee-page">
            <SubPromo title={ "Our Coffee" } imgUrl={ "/img/bg/coffee-shop-bg.png" }/>
            <About src={ '/img/girl.jpg' } alt={ "girl" } title={ "About our beans" }/>
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