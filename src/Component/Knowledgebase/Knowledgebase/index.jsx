import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Articals from './Articals';
import FeaturesTutorial from './FeaturesTutorial';
import HeaderPart from './HeaderPart';

const KnowledgeBaseContain = () => {
  return (
    <Fragment>
      <Container fluid={true} className="faq-section">
        <Row>
          <HeaderPart />
          <Articals />
          <Col sm="12">
            <FeaturesTutorial />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default KnowledgeBaseContain;