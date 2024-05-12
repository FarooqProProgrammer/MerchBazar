import MailSidebar from '../Mail Inbox/MailSidebar';
import MailContain from './ReadMailContain';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';

const ReadMailContain = () => {
    return (
      <Fragment>
        <Container fluid={true}>
          <div className="email-wrap">
            <Row>
              <Col xl="3" md="6" className="xl-30 box-col-4">
                <MailSidebar />
              </Col>
              <Col xl="9" md="12" className="xl-70 box-col-8">
                <MailContain />
              </Col>
            </Row>
          </div>
        </Container>
      </Fragment>
    );
};
export default ReadMailContain;