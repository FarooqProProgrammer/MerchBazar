import React, { Fragment, useState, useLayoutEffect, useContext } from 'react';
import { AlignCenter } from 'react-feather';
import { Row } from 'reactstrap';
import { Image } from '../../AbstractElements';
import HeaderContain from './HeaderContain';
import SearchBar from './SearchBar';
import imgg from '../../assets/images/logo/logo.png';
import CheckContext from '../../_helper/customizer/index';

const Header = () => {
  const { toggleSidebar } = useContext(CheckContext);
  const [toggle, setToggle] = useState(false);
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  const width = useWindowSize();

  const openCloseSidebar = () => {
    setToggle(!toggle);
    toggleSidebar(toggle);
  };
  return (
    <Fragment>
      <Row className="main-header-right m-0">
        <div className="main-header-left col-auto d-lg-none" id="out_side_click">
          <div className="logo-wrapper" >
            <a href="#javascript">
              <Image attrImage={{ className: 'img-fluid', src: `${imgg}`, alt: '' }} />
            </a>
          </div>
        </div>
        <div className="toggle-sidebar col-auto" onClick={() => openCloseSidebar()}
          style={width <= 1920 ? { display: 'block' } : { display: 'none' }} id="sidebar-toggle">
          <i className="status_toggle middle" >
            <AlignCenter className="status_toggle middle sidebar-toggle" />
          </i>
        </div>
        <SearchBar />
        <HeaderContain />
      </Row>
    </Fragment>
  );
};
export default Header;