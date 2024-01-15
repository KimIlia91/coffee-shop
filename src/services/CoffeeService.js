
const useCoffeeService = () => {
    
    const data = [
        { id: 1, img: '/img/test-product.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 2, img: '/img/test-product.jpg', name: 'BROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 3, img: '/img/test-product.jpg', name: 'CROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 4, img: '/img/test-product.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 5, img: '/img/test-product.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 6, img: '/img/test-product.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 7, img: '/img/products/solimo-coffee.png', name: 'Solimo Coffee Beans 2 kg', country: 'Brazil', price: 10.73, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 8, img: '/img/products/presto-coffee.png', name: 'Presto Coffee Beans 1 kg', country: 'Columbia', price: 15.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 9, img: '/img/products/aromistico-coffee.png', name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
    ];

    const getAllCoffee = (term = '', filter = 'all') => {
        let filteredData = [];
        const showData = data.filter(item => item.id < 7);
        switch (filter) {
            case 'Brazil':
                filteredData = showData.filter(item => item.country === 'Brazil');
                break;
            case 'Kenya':
                filteredData = showData.filter(item => item.country === 'Kenya');
                break;
            case 'Columbia':
                filteredData = showData.filter(item => item.country === 'Columbia');
                break;
            default:
                filteredData = showData; 
                break;           
        }

        return term === '' ? filteredData : filteredData.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
    };

    const getCoffeeById = (id) => {
        return data[id - 1];
    }

    const getBestProducts = () => {
        return data.filter(item => item.id > 6);
    }

    return { getAllCoffee, getCoffeeById, getBestProducts };
}

export default useCoffeeService;