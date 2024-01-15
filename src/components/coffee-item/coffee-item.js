import { Link } from 'react-router-dom';
import './coffee-item.scss';

const CoffeeItem = ({ id, name, img, country, price }) => {
    return (
        <Link to={ `/coffee/${id}` } key={ id } className='coffee-item'>
            <img src={ img } alt={ name } />
            <div className="coffee-item__name">{ name }</div>
            <div className="coffee-item__country">{ country }</div>
            <div className="coffee-item__price">{ `${price}$` }</div>
        </Link>
    )
}

export default CoffeeItem;