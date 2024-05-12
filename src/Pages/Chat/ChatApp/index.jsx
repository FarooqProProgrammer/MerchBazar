import ChatAppContain from '../../../Component/Chat/ChatApp';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import React, { Fragment } from 'react';

const ChatApp = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Chat" title=" Chat App" />
        </div>
        <ChatAppContain />
      </Fragment>
    );
};
export default ChatApp;