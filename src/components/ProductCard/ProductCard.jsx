import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import classes from './ProductCard.module.css';

const ProductCard = product => {
  const { title, company, price, image, addToCart, addedCount } = product;
  return (
    <div className={classes.content}>
    <Card>
      <div className="card-image">
        <Image src={image} />
      </div>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{company}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="rub" />
          {price}
        </a>
      </Card.Content>
      <Button onClick={addToCart.bind(this, product)}>
        Добавить в корзину {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
    </div>
  );
};

export default ProductCard;
