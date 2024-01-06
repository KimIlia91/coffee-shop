import './best-products.css';

const BestProducts = () => {
    return (
        <div className="best-products">
            <div className="best-products__title">Our best</div>
            <div className="best-products__wrapper">
                <div className="best-products__item">
                    <img src="/img/products/solimo-coffee.png" alt="solimo-coffee" />
                    <div className="best-products__descr">Solimo Coffee Beans 2 kg</div>
                    <div className="best-products__price">10.73$</div>
                </div>
                <div className="best-products__item">
                    <img src="/img/products/presto-coffee.png" alt="presto-coffee" />
                    <div className="best-products__descr">Presto Coffee Beans 1 kg</div>
                    <div className="best-products__price">15.99$</div>
                </div>
                <div className="best-products__item">
                    <img src="/img/products/aromistico-coffee.png" alt="aromistico-coffee" />
                    <div className="best-products__descr">AROMISTICO Coffee 1 kg</div>
                    <div className="best-products__price">6.99$</div>
                </div>
            </div>
        </div>
    )
}

export default BestProducts;