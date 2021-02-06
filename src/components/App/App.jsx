import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

import ProductCard from './../ProductCard/ProductCardContainer';
import Filter from './../Filter/FilterContainer';
import Menu from './../Menu/MenuContainer';

class App extends Component {
  componentWillMount() {
    const { setProducts } = this.props;
    axios.get('/products.json').then(({ data }) => {
      setProducts(data);
    });
  }

  render() {
    const { products, isReady } = this.props;
    return (
      <Container>
        <div className="app-wrapper">
        <Menu />
        <Filter />
        <div className="app-wrapper-content">
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Loading...'
            : products.map((product, i) => <ProductCard key={i} {...product} />)}
        </Card.Group>
        </div>
        </div>
      </Container>
    );
  }
}

export default App;
