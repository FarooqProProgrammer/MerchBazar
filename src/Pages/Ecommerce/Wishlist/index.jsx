import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import WishListContain from '../../../Component/Ecommerce/Wishlist';
import React, { Fragment } from 'react';

const WishList = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Ecommerce" title="WishList" />
        </div>
        <WishListContain />
      </Fragment>
    );
};
export default WishList;