import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ProductCartConatain from '../../../Component/Ecommerce/ProductCart';
import React, { Fragment } from 'react';

const ProductCart = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Ecommerce" title="Cart" />
        </div>
        <ProductCartConatain />
      </Fragment>
    );
};
export default ProductCart;