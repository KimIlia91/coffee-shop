import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Spinner from "../components/spinner/Spinner";

const MainPage = lazy(() => import('../pages/main-page/main-page'));
const CoffeePage = lazy(() => import('../pages/coffee-page/coffee-page'));
const CoffeeItemPage = lazy(() => import('../pages/coffee-item-page/coffee-item-page'));
const GoodsPage = lazy(() => import('../pages/goods-page/goods-page'));

const App = () => {
  return (
    <Router>
      <div className="app">
          <main>
            <Suspense fallback={ <Spinner /> }>
              <Routes>
                    <Route end path='/' element={ <MainPage/> }/>
                    <Route end path='/coffee' element={ <CoffeePage/> }/>
                    <Route end path='/coffee/:coffeeId' element={ <CoffeeItemPage/> }/>
                    <Route end path='/goods' element={ <GoodsPage/> }/>
                </Routes>
            </Suspense>
          </main>
      </div>
    </Router>
  )
}

export default App;