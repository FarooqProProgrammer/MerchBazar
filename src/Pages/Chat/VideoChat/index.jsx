import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import VideoChatContain from '../../../Component/Chat/VideoChat';
import React, { Fragment } from 'react';

const VideoChat = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Chat" title=" Video Chat" />
        </div>
        <VideoChatContain />
      </Fragment>
    );
};
export default VideoChat;