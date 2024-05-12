import LeftContact from './Left-contact';
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';

const ContactFirebaseContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <LeftContact />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default ContactFirebaseContain;