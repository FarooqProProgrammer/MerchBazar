import { H5, P, Image, Btn } from '../../AbstractElements';
import timeline4 from '../../assets/images/social-app/timeline-4.png';
import { ProfileIntro, SocialNetworks, Dribbble, Facebooks, Twitters, AboutMe, FavouriteMusicBands } from '../../Constant';
import FollowerSidebar from '../Users/UsersProfile/FollowerSidebar';
import FollowingSidebar from '../Users/UsersProfile/FollowingSidebar';
import FriendsSidebar from '../Users/UsersProfile/FriendsSidebar';
import PhotoSidebar from '../Users/UsersProfile/PhotoSidebar';
import { Col, Card, CardHeader, CardBody, Collapse } from 'reactstrap';
import React, { Fragment, useState } from 'react';

const RightBar = () => {
  const [isIntro, setisIntro] = useState(true);
  return (
    <Fragment>
      <Col md="6" xl="12" className='xl-50 box-col-6'>
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'mb-0' }}>
              <Btn attrBtn={{ color: 'link ps-0', onClick: () => setisIntro(!isIntro), databstoggle: 'collapse', datatarget: '#collapseicon7', ariaexpanded: 'isIntro', ariacontrols: 'collapseicon7' }}>{ProfileIntro}</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={isIntro}>
            <CardBody className="filter-cards-view">
              <span className="f-w-600">{AboutMe} :</span>
              <P>{'Hi, I’m elana, I’m 30 and I work as a'}{'web Designer for the “Daydreams”'}
                {'Agency in Pier 56.'}</P>
              <span className="f-w-600">{'Favourite TV shows'} :</span>
              <P>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi dolor ut maiores recusandae voluptas quod ea error cupiditate libero.'}</P>
              <span className="f-w-600">{FavouriteMusicBands} :</span>
              <P>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi dolor ut maiores recusandae voluptas quod ea error cupiditate libero.'}</P>
              <div className="social-network theme-form">
                <span className="f-w-600">{SocialNetworks}</span>
                <Btn attrBtn={{ color: 'social-btn btn-fb mb-2 text-center' }}>
                  <i className="fa fa-facebook m-r-5"></i>{Facebooks}
                </Btn>
                <Btn attrBtn={{ color: 'social-btn btn-twitter mb-2 text-center' }}>
                  <i className="fa fa-twitter m-r-5"></i>{Twitters}
                </Btn>
                <Btn attrBtn={{ color: 'social-btn btn-google text-center' }}>
                  <i className="fa fa-dribbble m-r-5"></i>{Dribbble}
                </Btn>
              </div>
            </CardBody>
          </Collapse>
        </Card>
      </Col>
      <FollowerSidebar />
      <FollowingSidebar />
      <PhotoSidebar />
      <FriendsSidebar />
      <Col md="6" xl="12" className='xl-50 box-col-6'>
        <Card>
          <Image attrImage={{ className: 'img-fluid', src: `${timeline4}`, alt: '' }} />
        </Card>
      </Col>
    </Fragment>
  );
};

export default RightBar;