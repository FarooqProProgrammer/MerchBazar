import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ContactContain from '../../Component/Contact/ContactApp';
import React, { Fragment } from 'react';

const Contact = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Contact" title="Contact" />
        </div>
        <ContactContain />
      </Fragment>
    );
};
export default Contact;