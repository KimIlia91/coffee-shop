import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/footer";
import SubPromo from "../../components/subpromo/subpromo";
import useCoffeeService from "../../services/CoffeeService";

import './coffee-item-page.scss';

const CoffeeItemPage = () => {
    const { coffeeId } = useParams();
    const [ coffee, setCoffee ] = useState(null);
    const { getCoffeeById } = useCoffeeService();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newCoffee = getCoffeeById(coffeeId);
                setCoffee(newCoffee);
            } catch (error) {
                console.error('Error fetching coffee:', error);
            }
        };

        fetchData();
    }, [coffeeId]);

    if (!coffee) {
        return <p>Loading...</p>;
    }

    return (
        <div className="coffee-item-page">
            <SubPromo title={ "Our Coffee" } imgUrl={ "/img/bg/coffee-shop-bg.png" }/>
            <div className="coffee-item-page__wrapper">
                <img src={ coffee.img } alt={ coffee.name } />
                <div className="coffee-item-page__descr">
                    <div className="coffee-item-page__title">About it</div>
                    <div className="coffee-item-page__divider">
                        <div className="coffee-item-page__line"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <g clipPath="url(#clip0_4_295)">
                                <path d="M5.38845 26.5504C4.03449 24.1621 4.95554 20.4168 7.75693 17.6151C10.9384 14.4341 15.337 13.6759 17.5827 15.9214C17.5851 15.9242 17.5879 15.9274 17.5913 15.9304C17.1418 17.2383 15.7102 20.0203 11.42 21.5245C7.48942 22.9031 5.97353 25.0955 5.38845 26.5504ZM16.2605 19.5906C15.2344 20.6175 13.776 21.6253 11.7102 22.3503C7.51766 23.8203 6.34633 26.2275 6.01945 27.3931C6.03527 27.4089 6.04806 27.4255 6.06292 27.4401C8.30844 29.6857 12.7076 28.9273 15.8882 25.7464C18.7188 22.9159 19.6292 19.1225 18.2142 16.7383C17.8736 17.5324 17.2813 18.5697 16.2605 19.5906ZM7.58465 9.2452C12.1138 9.6421 14.564 7.69641 15.512 6.69018C15.5103 6.68618 15.5092 6.68167 15.5079 6.67805C14.387 3.70713 10.0663 2.58599 5.85745 4.17405C2.15076 5.57274 -0.231913 8.60592 0.0179255 11.3398C1.15059 10.2555 3.43514 8.88223 7.58465 9.2452ZM9.9169 14.9334C13.6625 13.5205 16.0541 10.4387 15.7471 7.6831C15.1096 8.26655 14.1423 8.96808 12.7918 9.47781C11.434 9.99005 9.68968 10.3081 7.50894 10.1171C3.08342 9.72905 1.02379 11.4401 0.245287 12.3682C0.253198 12.3888 0.258743 12.4091 0.265916 12.4285C1.38705 15.4002 5.70787 16.5218 9.9169 14.9334ZM23.0248 8.73791C25.7422 5.09207 25.3735 1.9848 25.0151 0.649692C25.0109 0.649248 25.0069 0.647695 25.003 0.646808C21.8859 0.0399204 18.6621 3.12782 17.8023 7.54313C17.0451 11.4328 18.3749 15.0528 20.8322 16.2767C20.5046 14.7432 20.5365 12.0782 23.0248 8.73791ZM25.9836 0.971325C26.1454 1.82058 26.2341 3.0121 25.9582 4.42862C25.6811 5.85356 25.0348 7.50468 23.7271 9.26028C21.0722 12.8223 21.4461 15.4731 21.8269 16.623C21.8487 16.6275 21.869 16.6331 21.8891 16.6375C25.0065 17.2444 28.2299 14.157 29.0896 9.74125C29.8552 5.81186 28.4892 2.15715 25.9836 0.971325Z" fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4_295">
                                <rect width="29.302" height="29.302" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="coffee-item-page__line"></div>
                    </div>
                    <div className="coffee-item-page__country"><span>Country:</span> { coffee.country }</div>
                    <div className="coffee-item-page__text">
                        <span>Description:</span> { coffee.description }
                    </div>
                    <div className="coffee-item-page__price">
                        <span>Price:</span> { coffee.price }$
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CoffeeItemPage;