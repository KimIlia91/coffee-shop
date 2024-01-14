import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MainPage, CoffeePage, CoffeeItemPage, GoodsPage } from '../pages';

const App = () => {
  return (
    <Router>
      <div className="app">
          <main>
              <Routes>
                  <Route end path='/' element={ <MainPage/> }/>
                  <Route end path='/coffee' element={ <CoffeePage/> }/>
                  <Route end path='/coffee/:coffeeId' element={ <CoffeeItemPage/> }/>
                  <Route end path='/goods' element={ <GoodsPage/> }/>
              </Routes>
          </main>
      </div>
    </Router>
  );
}

export default App;