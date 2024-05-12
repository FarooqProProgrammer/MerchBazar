import AskQnA from './AskQnA';
import DailyEarning from './DailyEarning';
import DealerTable from './DealerTable';
import GoalOverview from './GoalOverview';
import Greeting from './Greeting';
import LatestUpdate from './LatestUpdate';
import ProductValuation from './ProductValuation';
import Profile from './Profile';
import QuickOption from './QuickOption';
import RecentMessages from './RecentMessages';
import SocialReview from './SocialReview';
import Statistics from './Statistics';
import { Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const DefaultContain = () => {
    return (
      <Fragment>
        <Container fluid={true} className="default-dash">
          <Row>
            <Greeting />
            <LatestUpdate />
            <DailyEarning />
            <QuickOption />
            <RecentMessages />
            <ProductValuation />
            <Profile />
            <DealerTable />
            <SocialReview />
            <Statistics />
            <GoalOverview />
            <AskQnA />
          </Row>
        </Container>
      </Fragment>
    );
};
export default DefaultContain;