import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductsListing from './views/ProductsListing'
import ProductDetails from './views/ProductDetails'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact component={ProductsListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found.</Route>
        </Routes>
      </Router>
     </div>
  );
}

export default App;
