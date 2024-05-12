import React, { Fragment } from 'react';
import { Row, Col, Card } from 'reactstrap';
import CountUp from 'react-countup';
import { ArrowDown, ArrowUp, } from 'react-feather';
import { H5 } from '../../../AbstractElements';
import Sales1 from './Sales1';
import { Month, Sale, Today, Week, Year } from '../../../Constant';

const Sales = () => {
  return (
    <Fragment>
      <Col xl="6" className="box-col-12 xl-50">
        <Card className="widget-joins widget-arrow">
          <Row>
            <Col sm="6" className="pe-0">
              <div className="media border-after-xs">
                <div className="align-self-center me-3 text-start">
                  <span className="widget-t mb-1">{Sale}</span>
                  <H5 attrH5={{ className: 'mb-0' }}>{Today}</H5>
                </div>
                <div className="media-body align-self-center">
                  <ArrowDown className="font-primary" />
                </div>
                <div className="media-body">
                  <H5 attrH5={{ className: 'mb-0' }}>$
                    <span className="counter">
                      <CountUp end={25698} />
                    </span>
                  </H5>
                  <span className="mb-1">{'-$2658(36%)'}</span>
                </div>
              </div>
            </Col>
            <Col sm="6" className="ps-0">
              <div className="media">
                <div className="align-self-center me-3 text-start">
                  <span className="widget-t mb-1">{Sale}</span>
                  <H5 attrH5={{ className: 'mb-0' }}>{Month}</H5>
                </div>
                <div className="media-body align-self-center">
                  <ArrowUp className="font-primary" />
                </div>
                <div className="media-body ps-2">
                  <H5 attrH5={{ className: 'mb-0' }}>$
                    <span className="counter">
                      <CountUp end={6954} />
                    </span>
                  </H5>
                  <span className="mb-1">{'+$369(15%)'}</span>
                </div>
              </div>
            </Col>
            <Col sm="6" className="pe-0">
              <div className="media border-after-xs">
                <div className="align-self-center me-3 text-start">
                  <span className="widget-t mb-1">{Sale}</span>
                  <H5 attrH5={{ className: 'mb-0' }}>{Week}</H5>
                </div>
                <div className="media-body align-self-center ps-sm-0 ps-2">
                  <ArrowUp className="font-primary" /></div>
                <div className="media-body">
                  <H5 attrH5={{ className: 'mb-0' }}>$
                    <span className="counter">
                      <CountUp end={63147} />
                    </span>
                  </H5>
                  <span className="mb-1">{'+$69(65%)'}</span>
                </div>
              </div>
            </Col>
            <Col sm="6" className="ps-0">
              <div className="media">
                <div className="align-self-center me-3 text-start">
                  <span className="widget-t mb-1">{Sale}</span>
                  <H5 attrH5={{ className: 'mb-0' }}>{Year}</H5>
                </div>
                <div className="media-body align-self-center ps-3">
                  <ArrowUp className="font-primary" /></div>
                <div className="media-body ps-2">
                  <H5 attrH5={{ className: 'mb-0' }}>{'$'}
                    <span className="counter">
                      <CountUp end={963198} />
                    </span>
                  </H5>
                  <span className="mb-1">{'+$3654(90%)'}</span>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
      <Sales1 />
    </Fragment>
  );
};
export default Sales;