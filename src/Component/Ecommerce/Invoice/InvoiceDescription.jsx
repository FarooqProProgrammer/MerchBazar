import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Media, Row } from 'reactstrap';
import { H4, H6, P } from '../../../AbstractElements';
import { JohanDeo, JohanDeoMailId, ProjectDescription, ProjectDescriptionDetails } from '../../../Constant';
import { Image } from '../../../AbstractElements';
import user1 from '../../../assets/images/user/1.jpg';

const InvoiceDescription = () => {
  return (
    <Fragment>
      <Row className="invo-profile">
        <Col xl="4">
          <div className="invo-profile-left">
            <Media>
              <div className="media-left">
                <Image attrImage={{ className: 'media-object rounded-circle img-60', src: `${user1}`, alt: '' }} />
              </div>
              <Media body>
                <H4 attrH4={{ className: 'media-heading f-w-600' }}>
                  <Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>{JohanDeo}</Link>
                </H4>
                <P>{JohanDeoMailId}
                  <span>555-555-5555</span>
                </P>
              </Media>
            </Media>
          </div>
        </Col>
        <Col xl="8">
          <div className="invo-profile-right">
            <div id="project">
              <H6>{ProjectDescription}</H6>
              <P>{ProjectDescriptionDetails}</P>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
export default InvoiceDescription;