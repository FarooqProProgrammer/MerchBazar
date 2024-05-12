import React, { Fragment, useContext } from 'react';
import { Col, Card } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { Download, Link } from 'react-feather';
import { Image, H6, LI, UL, P } from '../../../AbstractElements';
import LearningContext from '../../../_helper/Leatning';

const BoxList = () => {
  const { learningData } = useContext(LearningContext);
  const history = useNavigate();
  const clickApply = () => {
    history(`${process.env.PUBLIC_URL}/learning/learning-detail`);
  };
  return (
    <Fragment>
      {learningData && learningData.map((data, i) => {
        return (
          <Col xl="4" className='xl-50 box-col-6' sm="6" key={i}>
            <Card>
              <div className="learning-box product-box">
                <div className="product-img">
                  <Image attrImage={{ className: 'img-fluid top-radius-blog', src: `${require('../../../assets/images/' + data.img)}`, alt: '' }} />
                  <div className="product-hover">
                    <UL attrUL={{ className: 'simple-list d-flex flex-row' }}>
                      <LI>
                        <Link onClick={() => clickApply()} />
                      </LI>
                      <LI>
                        <Download />
                      </LI>
                    </UL>
                  </div>
                </div>
                <div className="details-main">
                  <a href="#javascript">
                    <div className='bottom-details'>
                      <H6>{data.title}</H6>
                    </div>
                  </a>
                  <P>{data.short_description}</P>
                </div>
              </div>
            </Card>
          </Col>
        );
      })}
    </Fragment>
  );
};
export default BoxList;