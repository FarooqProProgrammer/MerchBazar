import React, { Fragment, useEffect, useState } from 'react';
import { FileText, LogIn, Mail, MoreHorizontal, Settings, User } from 'react-feather';
import { Media } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { H6, Image, LI, UL } from '../../AbstractElements';
import UserImg from '../../assets/images/avtar/emoji/9.png';
import ItemCart from './ItemCart';
import MaxMiniSize from './MaxMiniSize';
import Message from './Message';
import MoonLight from './MoonLight';
import Notification from './Notification';
import Language from './Langauge'; 
import { firebase_app } from '../../Config/Config';
import Bookmark from './Bookmark/index';

const HeaderContain = () => {
  const [profile, setProfile] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    setProfile(localStorage.getItem('profileURL') || UserImg);
    setName(localStorage.getItem('Name'));

  }, []);
  const [open, setOpen] = useState(false);
  const onAdd = () => {
    setOpen(!open);
  };
  const authenticated = JSON.parse(localStorage.getItem('authenticated'));
  const auth0_profile = JSON.parse(localStorage.getItem('auth0_profile'));
  const history = useNavigate();

  const Logout = () => {
    localStorage.removeItem('profileURL');
    localStorage.removeItem('Name');
    localStorage.removeItem('token');
    firebase_app.auth().signOut();
    history(`${process.env.PUBLIC_URL}/login`);
    localStorage.setItem('authenticated', false);
  };
  return (
    <Fragment>
      <div className="nav-right col pull-right right-menu">
        <UL attrUL={{ className: `simple-list d-flex flex-row nav-menus ${open ? 'open' : ''}` }}>
          <LI attrLI={{ className: 'onhover-dropdown' }}>
            <a className="txt-dark" href="#javascript"> 
            <H6 className='rounded-circle'>EN</H6> </a>
            <Language />
          </LI>
          <ItemCart />
          <Bookmark />
          <Notification />
          <Message />
          <MoonLight />
          <MaxMiniSize />
          <LI attrLI={{ className: 'onhover-dropdown pe-0' }} >
            <Media className="profile-media align-items-center">
              <Image attrImage={{
                className: 'rounded-circle', src: `${authenticated ? auth0_profile.picture : profile}`, alt: '',
              }}
              />
            </Media>
            {/* <Media body>
              <span>{authenticated ? auth0_profile.name : name}</span>
            </Media> */}
            <UL
              attrUL={{
                className: 'simple-list profile-dropdown onhover-show-div',
              }}
            >
              <LI>
                <User />
                <Link to={`${process.env.PUBLIC_URL}/users/userprofile`}><span>Account </span></Link>
              </LI>
              <LI>
                <Mail />
                <Link to={`${process.env.PUBLIC_URL}/email/mailbox`}><span>Inbox</span></Link>
              </LI>
              <LI>
                <FileText />
                <Link to={`${process.env.PUBLIC_URL}/todo`}><span>Taskboard</span></Link>
              </LI>
              <LI>
                <Settings />
                <Link to={`${process.env.PUBLIC_URL}/users/useredit`}><span>Settings</span></Link>
              </LI>
              <LI attrLI={{ onClick: Logout }}>
                <Link to={`${process.env.PUBLIC_URL}/login`} className="btn btn-light w-100">
                  <LogIn /> Logout
                </Link>
              </LI>
            </UL>
          </LI>
        </UL>
      </div >
      <div className="d-lg-none col mobile-toggle pull-right" onClick={() => onAdd()}>
        <i> <MoreHorizontal /></i>
      </div>
    </Fragment >
  );
};
export default HeaderContain;