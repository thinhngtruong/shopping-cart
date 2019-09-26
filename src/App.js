import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'
import Message from './components/Message'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <h3>
              <Message />
            </h3>
            <CartContainer />
          </div>
        </main>
        <Footer />  
      </div>
    );
  }
}
export default App;
