import './coffee-item.css';

const CoffeeItem = ({id, name, img, country, price }) => {
    return (
        <a key={ id } href='#' className='coffee-item'>
            <img src={ img } alt={ name } />
            <div className="coffee-item__name">{ name }</div>
            <div className="coffee-item__country">{ country }</div>
            <div className="coffee-item__price">{ `${price}$`  }</div>
        </a>
    )
}

export default CoffeeItem;