
const useCoffeeService = () => {
    
    const data = [
        { id: 1, img: '/img/test.png', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99 },
        { id: 2, img: '/img/test.png', name: 'BROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99 },
        { id: 3, img: '/img/test.png', name: 'CROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99 },
        { id: 4, img: '/img/test.png', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99 },
        { id: 5, img: '/img/test.png', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99 },
        { id: 6, img: '/img/test.png', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99 }
    ];

    const getAllCoffee = (term = '') => {
        return term === '' ? data : data.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
    };

    return { getAllCoffee };
}

export default useCoffeeService;