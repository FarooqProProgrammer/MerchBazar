import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import Basic from '../../../_core/Ui-kits/Tooltip/Basic';
import Directions from '../../../_core/Ui-kits/Tooltip/Direction';
import HtmlElement from '../../../_core/Ui-kits/Tooltip/HtmlElement';

const Tooltips = (props) => {

  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Ui Kits" title="Tooltip" />
      </div>
      <Container fluid={true}>
        <Row>
          <Basic />
          <Directions />
          <HtmlElement />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Tooltips;