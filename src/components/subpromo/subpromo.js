import Header from '../header/header';
import './subpromo.scss';

const SubPromo = ({ title, imgUrl }) => {
    const test = { background: `url(${imgUrl}) lightgray 50% / cover no-repeat` };
    
    return (
        <div className="subpromo" style={ test }>
            <Header/>
            <h1 className="subpromo__title">{ title }</h1>
        </div>
    )
}

export default SubPromo;