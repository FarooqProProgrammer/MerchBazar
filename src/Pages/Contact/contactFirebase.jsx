import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ContactFirebaseContain from '../../Component/Contact/ContactFirebase';
import React, { Fragment } from 'react';

const ContactFirebase = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Contact" title="Contact Firebase" />
        </div>
        <ContactFirebaseContain />
      </Fragment>
    );
};
export default ContactFirebase;