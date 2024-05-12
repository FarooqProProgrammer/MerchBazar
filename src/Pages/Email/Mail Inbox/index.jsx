import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import MailInboxContain from '../../../Component/Email/Mail Inbox';
import React, { Fragment } from 'react';

const MailInbox = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Email" title="Mail Inbox" />
        </div>
        <MailInboxContain />
      </Fragment>
    );
};
export default MailInbox;