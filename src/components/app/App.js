import MainPage from '../main-page/main-page';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, img: '/img/test.png', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99 },
        { id: 2, img: '/img/test.png', name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99 },
        { id: 3, img: '/img/test.png', name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99 },
        { id: 4, img: '/img/test.png', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99 },
        { id: 5, img: '/img/test.png', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99 },
        { id: 6, img: '/img/test.png', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99 }
      ],
      filter: 'all',
      term: ''
    }
  }

  onUpdateFilter = (filter) => {
    this.setState({ filter });
  }

  coffeeFilter = (data, filter) => {
    switch (filter) {
      case 'brazil':
          return data.filter(item => item.country === 'Brazil');

      case 'kenya':
          return data.filter(item => item.country === 'Kenya');

      case 'columbia':
            return data.filter(item => item.country === 'Columbia');
      
      default:
          return data;
    }
  }

  onUpdateSearch = (term) => {
    this.setState({ term });
  }

  searchCofee = (data, term) => {
    if (term.length === 0) {
      return data;
    }

    return data.filter(item => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  render() {
    const { data, filter, term } = this.state;
    const visibleData = this.searchCofee(data, term);
    const filteredData = this.coffeeFilter(visibleData, filter)

    return (
      <div className="App">
          <MainPage/>
      </div>
    );
  }
}

export default App;
