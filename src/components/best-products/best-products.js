import { useEffect, useState } from 'react';
import './best-products.scss';
import useCoffeeService from '../../services/CoffeeService';
import { Link } from 'react-router-dom';

const BestProducts = () => {
    const [ products, setProducts ] = useState([]);

    const { getBestProducts } = useCoffeeService();

    useEffect(() => {
        setProducts(getBestProducts());
    }, []);
    
    const items = renderItems(products);

    return (
        <div className="best-products">
            <h2 className="best-products__title">Our best</h2>
            <div className="best-products__wrapper">
                { items }
            </div>
        </div>
    )

    function renderItems(items) {
        return items.map(item => {
            return (
                <Link key={ item.id } to={ `/coffee/${item.id}` }>
                    <div className="best-products__item">
                        <img src={item.img} alt={ item.name } />
                        <h3 className="best-products__descr">{ item.name }</h3>
                        <div className="best-products__price">{ item.price }$</div>
                    </div>
                </Link>
            )
        });
    }
}

export default BestProducts;