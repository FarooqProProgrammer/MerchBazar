import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import AnnuallyEarnings from './AnnuallyEarnings';
import Calender from './Calender';
import GreetingProject from './GreetingProject';
import ManageInvoice from './ManageInvoice';
import VisitorsCountries from './VisitorsCountries';

const ProjectContain = () => {
    return (
      <Fragment>
        <Container fluid={true} className="project-dash">
          <Row className="size-column">
            <GreetingProject />
            <Calender />
            <AnnuallyEarnings />
            <VisitorsCountries />
            <ManageInvoice />
          </Row>
        </Container>
      </Fragment>
    );
};
export default ProjectContain;