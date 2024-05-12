import CashonDelivery from './Cod';
import CreditCards from './CreditCard';
import DebitCards from './DebitCard';
import EMIs from './Emi';
import NetBankings from './NetBanking';
import { Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const PaymentDetailContain = () => {
    return (
      <Fragment>
        <Container fluid={true} className="credit-card">
          <Row>
            <CreditCards />
            <DebitCards />
            <CashonDelivery />
            <EMIs />
            <NetBankings />
          </Row>
        </Container>
      </Fragment>
    );
};
export default PaymentDetailContain;