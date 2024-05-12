import React, { Fragment, useContext } from 'react';
import { Container } from 'reactstrap';
import FilterContext from '../../../_helper/ecommerce/filter';
import ProductFeatures from './ProductFeatures';
import ProductGrid from './ProductGrid';

const ProductContain = () => {
  const { IsFilter } = useContext(FilterContext);
  return (
    <Fragment>
      <Container fluid={true} className={`product-wrapper ${IsFilter ? 'sidebaron' : ''}`}>
        <div className="product-grid">
          <ProductFeatures />
          <ProductGrid />
        </div>
      </Container>
    </Fragment>
  );
};
export default ProductContain;