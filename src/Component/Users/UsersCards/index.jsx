import AllCards from './AllCards';
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';

const UsersCardssContain = () => {
    return (
      <Fragment>
        <Container fluid className="user-card">
          <Row>
            <AllCards />
          </Row>
        </Container>
      </Fragment>
    );
};
export default UsersCardssContain;