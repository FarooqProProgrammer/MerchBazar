import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ProductContain from '../../../Component/Ecommerce/Products';
import React, { Fragment } from 'react';

const Products = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Ecommerce" title=" Products" />
        </div>
        <ProductContain />
      </Fragment>
    );
};
export default Products;