import React, { Fragment } from 'react';
import { Media } from 'reactstrap';
import { MARKJENCO, MARKJENCOEMAIL } from '../../../Constant';
import { H6, Image, P } from '../../../AbstractElements';

const HeaderProfile = () => {
  return (
    <Fragment>
      <Media className="media">
        <div className="media-size-email">
          <Image attrImage={{ className: 'me-3 rounded-circle', src: `${require('../../../assets/images/user/user.png')}`, alt: '' }} /></div>
        <Media body>
          <H6 attrH6={{ className: 'f-w-600' }} >{MARKJENCO}</H6>
          <P>{MARKJENCOEMAIL}</P>
        </Media>
      </Media>
    </Fragment>
  );
};

export default HeaderProfile;