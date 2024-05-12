import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import Basic from '../../../_core/Ui-kits/PopOver/Basic';
import Directions from '../../../_core/Ui-kits/PopOver/Direction';
import HtmlContents from '../../../_core/Ui-kits/PopOver/HtmlConten';

const PopOvers = (props) => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Ui Kits" title="Popover" />
      </div>
      <Container fluid={true}>
        <Row className="popover-main">
          <Basic />
          <Directions />
          <HtmlContents />
        </Row>
      </Container>
    </Fragment>
  );
};
export default PopOvers;