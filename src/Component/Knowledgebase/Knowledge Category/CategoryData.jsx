import React, { Fragment, useContext, useEffect } from 'react';
import { Archive, ArrowRight, FileText } from 'react-feather';
import axios from 'axios';
import { Col, Row } from 'reactstrap';
import errorImg from '../../../assets/images/search-not-found.png';
import { H5, H6, Image, LI, UL } from '../../../AbstractElements';
import JobSearchContext from '../../../_helper/JobSearch';

const CategoryData = () => {
  const { search, setsearch } = useContext(JobSearchContext);
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/knowledgebaseDB.json`).then(res => setsearch(res.data));
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <Col sm="12">
        <div className="header-faq">
          <H5 className="mb-0">knowledge articles by category</H5>
        </div>
        <Row className="browse">
          {search.length > 0 ? search.map((data) => {
            return (
              <Col xl="4" md="6" className='xl-50' key={data.id}>
                <div className="browse-articles browse-bottom">
                  <H6>
                    <span><Archive /></span>{data.inspantitle}{data.title}
                  </H6>
                  <UL attrUL={{ className: 'simple-list' }}>
                    <LI>
                      <a href='#javascript'>
                        <H5><span><FileText /></span>{data.text1}</H5>
                        <span className='badge badge-primary pull-right'>{data.text1_badge}</span>
                      </a>
                    </LI>
                    <LI>
                      <a href='#javascript'>
                        <H5><span><FileText /></span>{data.text2}</H5>
                        <span className='badge badge-primary pull-right'>{data.text2_badge}</span>
                      </a>
                    </LI>
                    <LI>
                      <a href='#javascript'>
                        <H5><span><FileText /></span>{data.text3}</H5>
                        <span className='badge badge-primary pull-right'>{data.text3_badge}</span>
                      </a>
                    </LI>
                    <LI>
                      <a href='#javascript'>
                        <H5><span><FileText /></span>{data.text4}</H5>
                        <span className='badge badge-primary pull-right'>{data.text4_badge}</span>
                      </a>
                    </LI>
                    <LI>
                      <a href='#javascript' className="f-w-600 font-primary">
                        <span><ArrowRight /></span>
                        <span>{data.text5}</span>
                      </a>
                    </LI>
                  </UL>
                </div>
              </Col>
            );
          }) :
            <Image attrImage={{ className: 'img-fluid second-search', src: `${errorImg}`, alt: '' }} />
          }
        </Row>
      </Col>
    </Fragment>
  );
};
export default CategoryData;