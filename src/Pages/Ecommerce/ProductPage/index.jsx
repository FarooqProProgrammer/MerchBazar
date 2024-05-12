import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ProductPageContain from '../../../Component/Ecommerce/ProductPage';
import React, { Fragment } from 'react';

const ProductPage = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Ecommerce" title=" Product Page" />
        </div>
        <ProductPageContain />
      </Fragment>
    );
};
export default ProductPage;