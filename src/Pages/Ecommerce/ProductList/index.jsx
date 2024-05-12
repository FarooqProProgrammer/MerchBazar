import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ProductListContain from '../../../Component/Ecommerce/ProductList';
import React, { Fragment } from 'react';

const ProductList = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Ecommerce" title=" Product List" />
        </div>
        <ProductListContain/>
      </Fragment>
    );
};
export default ProductList;