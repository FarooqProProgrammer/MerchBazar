import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import FAQContent from '../../Component/FAQ';
import React, { Fragment } from 'react';

const FAQ = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="FAQ" title="FAQ" />
        </div>
        <FAQContent />
      </Fragment>
    );
};
export default FAQ;