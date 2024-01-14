import CoffeeItem from '../coffee-item/coffee-item';
import useCoffeeService from '../../services/CoffeeService';
import './coffee-list.css';
import { useEffect, useState } from 'react';

const CoffeeList = (props) => {
    const { getAllCoffee } = useCoffeeService();
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        onRequest();
    }, []);
    
    const onRequest = (searchTerm) => {
        onCoffeeLoaded(getAllCoffee(searchTerm));
    }
    
    const onCoffeeLoaded = (coffes) => {
        setCoffees(coffes);
    }

    const items = renderItems(coffees);
    
    console.log('CoffeeList');

    return (
        <div className='container'>
            <div className="coffee-list">
                { items }
            </div>
        </div>
    )
}

function renderItems(coffees) {
    return coffees.map(item => {
        const { id, name, img, price, country } = item;
        return (
            <CoffeeItem key={ id } name={ name } img= { img } price={ price } country={ country }/>
        )
    });
}

export default CoffeeList;