import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import ProjectDataList from './Project Data/ProjectDataList';

const ProjectListContain = (props) => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row className="project-cards">
          <ProjectDataList />
        </Row>
      </Container>
    </Fragment>
  );
};
export default ProjectListContain;