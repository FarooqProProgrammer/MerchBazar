import MailContain from './MailContain';
import MailSidebar from './MailSidebar';
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

const MailInboxContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="email-wrap">
          <Row>
            <Col xl="3" md="6" className="box-col-4 xl-30">
              <MailSidebar />
            </Col>
            <Col xl="9" md="12" className="box-col-8 xl-70">
              <MailContain />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default MailInboxContain;