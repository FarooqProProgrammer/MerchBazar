import MailSidebar from '../Mail Inbox/MailSidebar';
import ComposeMessage from './ComposeMessage';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';

const ComposeContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="email-wrap">
          <Row>
            <Col xl="3" md="6" className="box-col-4 xl-30">
              <MailSidebar />
            </Col>
            <Col xl="9" md="12" className="box-col-8 xl-70">
              <ComposeMessage />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default ComposeContain;