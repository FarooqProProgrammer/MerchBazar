import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, H6, LI, P, UL } from '../../../AbstractElements';
import { Image } from '../../../AbstractElements';
import { SocialReviewImg } from '../../../Data/DashDefault';
import { Link } from 'react-router-dom';

const SocialReview = () => {
  return (
    <Fragment>
      <Col xl="3" md="6" lg="6" sm="6" className="des-xl-50 xl-30 col-md-6 box-col-6 social-review-sec">
        <Card>
          <CardHeader >
            <H5>Social Review</H5>
          </CardHeader>
          <CardBody className="p-t-0 p-b-0 social-main">
            <div className="social-review-content">
              <H5 attrH5={{ className: 'counter' }}>6895</H5>
              <div className="star-sec-main">
                <H6 attrH6={{ className: 'mb-0' }}>You got +65%</H6>
                <UL attrUL={{ className: 'simple-list star-sec d-flex flex-row' }}>
                  <LI>
                    <i className="fa fa-star"></i>
                  </LI>
                  <LI>
                    <i className="fa fa-star"></i>
                  </LI>
                  <LI>
                    <i className="fa fa-star"></i>
                  </LI>
                  <LI>
                    <i className="fa fa-star"></i>
                  </LI>
                  <LI>
                    <i className="fa fa-star"></i>
                  </LI>
                </UL>
              </div>
              <P>More reviews than last week</P>
            </div>
            <UL attrUL={{ className: 'simple-list reviewer-profile d-flex flex-row' }}>
              {
                SocialReviewImg.map((item, i) => {
                  return (
                    <LI key={i}>
                      <Link to={`${process.env.PUBLIC_URL}/social-app`}><Image attrImage={{
                        className: 'rounded-circle',
                        src: `${item.img}`, alt: 'Card image cap'
                      }} /></Link>
                    </LI>
                  );
                })
              }
            </UL>
            <UL attrUL={{ className: 'simple-list review-details d-flex flex-row' }}>
              <LI>
                <div className="left-review">
                  <span className="counter">6521</span>
                  <P>5 star review</P>
                </div>
              </LI>
              <LI>
                <div className="right-review">
                  <span className="counter">0374</span>
                  <P>4 start review</P>
                </div>
              </LI>
            </UL>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default SocialReview;