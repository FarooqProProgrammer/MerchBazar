import React, { Fragment, useContext } from 'react';
import { Media } from 'reactstrap';
import { AlignJustify, Headphones, Paperclip, Search, Video } from 'react-feather';
import ChatAppContext from '../../../_helper/chat-app/index';
import { Image, LI, UL } from '../../../AbstractElements';

const ChatHeader = () => {
  const { selectedUserr, sidebarToggle, setSidebarToggle } =
    useContext(ChatAppContext);
  const editToggle = () => {
    setSidebarToggle(!sidebarToggle);
  };
  var images = require.context('../../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      <div className="media chat-header clearfix">
        <Image
          attrImage={{
            className: 'rounded-circle',
            src: `${dynamicImage(
              selectedUserr ? selectedUserr.thumb : 'user/8.jpg'
            )}`,
            alt: '',
          }}
        />
        <Media body>
          <div className="about">
            <div className="name">
              {selectedUserr ? selectedUserr.name : 'Vincent Porter'}
              {selectedUserr && selectedUserr.typing ? (
                <span className="font-primary f-12"> Typing...</span>
              ) : (
                ''
              )}
            </div>
            <div className="status">
              {selectedUserr ? selectedUserr.lastSeenDate : '5 May, 5:30 PM'}
            </div>
          </div>
        </Media>
        <UL
          attrUL={{
            as: 'ul',
            className:
              'simple-list list-inline float-start float-sm-end chat-menu-icons d-flex flex-row',
          }}
        >
          <LI attrLI={{ className: 'list-inline-item' }}>
            <a href="#javascript">
              <Search />
            </a>
          </LI>
          <LI attrLI={{ className: 'list-inline-item' }}>
            <a href="#javascript">
              <Paperclip />
            </a>
          </LI>
          <LI attrLI={{ className: 'list-inline-item' }}>
            <a href="#javascript">
              <Headphones />
            </a>
          </LI>
          <LI attrLI={{ className: 'list-inline-item' }}>
            <a href="#javascript">
              <Video />
            </a>
          </LI>
          <LI attrLI={{ className: 'list-inline-item toogle-bar' }}>
            <AlignJustify onClick={() => editToggle(true)} />
          </LI>
        </UL>
      </div>
    </Fragment>
  );
};
export default ChatHeader;