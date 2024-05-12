import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import BasicAccordions from '../../../_core/Ui-kits/Accordian/Basic';
import AllClose from '../../../_core/Ui-kits/Accordian/AllClose';
import PrimaryColorAccordian from '../../../_core/Ui-kits/Accordian/PrimaryColor';
import SecondaryColorAccordian from '../../../_core/Ui-kits/Accordian/SecondaryColor';
import WithIcon from '../../../_core/Ui-kits/Accordian/WithIcon';
import WithOperand from '../../../_core/Ui-kits/Accordian/WithOperand';

const Accordian = (props) => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Ui Kits" title="Accordion" />
      </div>
      <Container fluid={true}>
        <Row>
          <BasicAccordions />
          <AllClose />
          <PrimaryColorAccordian />
          <SecondaryColorAccordian />
          <WithIcon />
          <WithOperand />
        </Row>
      </Container>
    </Fragment>
  );
};
export default Accordian;