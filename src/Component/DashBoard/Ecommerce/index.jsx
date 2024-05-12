import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import PerformanceOverview from './PerformanceOverview/PerformanceOverview';
import AllServices from './AllServices';
import NumberOfCalculation from './NumberCalculation';
import BussinessGrowth from './BusinessGrowth';
import OurActivities from './OurActivities';
import NewProduct from './NewProducts/NewProduct';
import Payment from './Payments';
import ProductMarketValue from './ProductMarketValue';

const EcommerceContain = () => {
  return (
    <Fragment>
      <Container fluid={true} className="ecommerce-dash">
        <Row className="size-column">
          <PerformanceOverview />
          <AllServices />
          <NumberOfCalculation />
          <BussinessGrowth />
          <OurActivities />
          <NewProduct />
          <Payment />
          <ProductMarketValue />
        </Row>
      </Container>
    </Fragment>
  );
};
export default EcommerceContain;