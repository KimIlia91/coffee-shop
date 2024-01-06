import CoffeeItem from '../coffee-item/coffee-item';
import './coffee-list.css';

const CoffeeList = ({ data }) => {

    const items = data.map(item => {
        const { id, name, img, price, country } = item;
        return (
            <CoffeeItem key={ id } name={ name } img= { img } price={ price } country={ country }/>
        )
    });

    return (
        <div className='container'>
            <div className="coffee-list">
                { items }
            </div>
        </div>
    )
}

export default CoffeeList;