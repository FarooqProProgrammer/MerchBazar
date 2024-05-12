import React, { Fragment } from 'react';
import { Card, CardBody, Col, Media } from 'reactstrap';
import { MoreVertical } from 'react-feather';
import { AlexendraDhadio, ELANA, JasonBorne, OliviaJon } from '../../Constant';
import LikeComments from './LikeComments';
import { H6, P, Image } from '../../AbstractElements';
import imgg from '../../assets/images/user/1.jpg';
import imgg1 from '../../assets/images/user/2.png';
import imgg2 from '../../assets/images/user/3.jpg';
import smile from '../../assets/images/social-app/timeline-1.png';
import TimeLineContain2 from './TimeLineContain2';
import ApplyComments from './ApplyComments';
import MoreCommentss from './MoreComments';

const TimeLineContain = () => {
  const comment = 'we are working for the dance and sing songs.this car is very awesome for the youngster.please vote this car and like our post';
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardBody>
            <div className="new-users-social">
              <Media>
                <Image attrImage={{ className: 'rounded-circle image-radius m-r-15', src: `${imgg}`, alt: '', }} />
                <div className="media-body">
                  <H6 attrH6={{ className: 'mb-0 f-w-700' }}>{ELANA}</H6>
                  <P>January, 12,2022</P>
                </div>
                <span className="pull-right mt-0">
                  <MoreVertical /></span></Media>
            </div><Image attrImage={{ className: 'img-fluid', alt: '', src: `${smile}` }} />
            <div className="timeline-content">
              <LikeComments />
              <div className="social-chat">
                <div className="your-msg">
                  <Media>
                    <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} />
                    <div className="media-body">
                      <span className="f-w-600">{JasonBorne}
                        <span>1 Year Ago
                          <i className="fa fa-reply font-primary ps-1"></i>
                        </span></span>
                      <P>{comment}</P> </div> </Media>
                </div>
                <div className="other-msg">
                  <Media>
                    <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg1}` }} />
                    <div className="media-body">
                      <span className="f-w-600">{AlexendraDhadio}
                        <span>1 Month Ago
                          <i className="fa fa-reply font-primary ps-1"></i></span></span>
                      <P>yes, really very awesome car</P>
                    </div>
                  </Media>
                </div>
                <div className="other-msg">
                  <Media>
                    <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg2}` }} />
                    <div className="media-body">
                      <span className="f-w-600">{OliviaJon}
                        <span>15 Days Ago
                          <i className="fa fa-reply font-primary ps-1"></i></span></span>
                      <P>i like lexus cars</P>
                    </div>
                  </Media>
                </div>
                <MoreCommentss />
              </div>
              <ApplyComments />
            </div>
          </CardBody>
        </Card>
      </Col>
      <TimeLineContain2 />
    </Fragment >
  );
};
export default TimeLineContain;