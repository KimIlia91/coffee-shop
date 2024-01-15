import { useEffect, useState } from 'react';

import CoffeeItem from '../coffee-item/coffee-item';
import AppSearchPanel from '../search-panel/app-search-panel';
import AppFilter from '../filter/app-filter';
import useCoffeeService from '../../services/CoffeeService';

import './coffee-list.scss';

const CoffeeList = ({ disablePanel = false }) => {
    const [ coffees, setCoffees] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ filter, setFilter ] = useState('all');

    const { getAllCoffee } = useCoffeeService();

    useEffect(() => {
        onRequest();
    }, []);
    
    const onRequest = (searchTerm, filter) => {
        onCoffeeLoaded(getAllCoffee(searchTerm, filter));
    }
    
    const onCoffeeLoaded = (coffee) => {
        setCoffees(coffee);
    }

    const onUpdateSearchTerm = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
        onRequest(newSearchTerm, filter);
    }

    const onUpdateFilter = (newFilter) => {
        setFilter(newFilter);
        onRequest(searchTerm, newFilter);
    }
   
    const items = renderItems(coffees);
    console.log('render');
    return (
        <div className="coffee-list">
            <div className="coffee-list__control-panel" style={ { 'display': disablePanel ? 'none' : '' } }>
                <AppSearchPanel onUpdateSearchTerm={ onUpdateSearchTerm }/>
                <AppFilter updateFilter={ onUpdateFilter } newFilter={ filter }/>
            </div> 
            <div className="coffee-list__wrapper">
                { items }
            </div>
        </div>
    )
}

function renderItems(coffees) {
    return coffees.map(item => {
        const { id, name, img, price, country } = item;
        console.log(id);
        return (
            <CoffeeItem id={ id } name={ name } img= { img } price={ price } country={ country }/>
        )
    });
}

export default CoffeeList;