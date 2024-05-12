import React, { Fragment, useContext, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Row } from 'reactstrap';
import { H6, Image } from '../../../AbstractElements';
import FilterContext from '../../../_helper/ecommerce/filter';
import Category from '../filters/Category';
import PrizeRange from '../filters/PrizeRange';
import banner from '../../../assets/images/ecommerce/banner.jpg';

const ProductSidebar = () => {
  const { filterSearchBy, IsFilter } = useContext(FilterContext);
  const [sidebaron, setSidebaron] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState('');
  const onClickFilter = () => {
    if (sidebaron || window.innerWidth <= 480) {
      setSidebaron(false);
      document.querySelector('.product-wrapper').classList.add('sidebaron');
    } else {
      setSidebaron(true);
      document.querySelector('.product-wrapper').classList.remove('sidebaron');
    }
  };
  const handleSearchKeyword = (keyword) => {
    setSearchKeyword(keyword);
    filterSearchBy(searchKeyword);
  };
  return (
    <Fragment>
      <Row>
        <Col xl="3" sm="6" className='xl-30 box-col-5 pro-filter-sec'>
            <div className={`product-sidebar ${IsFilter ? 'open' : ''}`}>
              <div className="filter-section">
                <Card>
                  <CardHeader>
                    <H6 attrH6={{ className: 'mb-0 f-w-600', onClick: onClickFilter }}>Filters
                      <span className="pull-right">
                        <i className="fa fa-chevron-down toggle-data"> </i>
                      </span>
                    </H6>
                  </CardHeader>
                  <div className="left-filter">
                    <CardBody className="filter-cards-view animate-chk">
                      <Category />
                      <PrizeRange />
                      <div className="product-filter text-center mt-2">
                        <Image attrImage={{ className: 'img-fluid banner-product m-auto', src: `${banner}`, alt: '' }} />
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </div>
          </Col>
          <Col xl="9" sm="6" className='xl-70 box-col-7'>
            <Form>
              <FormGroup className="m-0 search-product">
                <Input className="form-control" type="text" placeholder="search"
                  defaultValue={searchKeyword}
                  onChange={(e) => handleSearchKeyword(e.target.value)} />
                <i className="fa fa-search"></i>
              </FormGroup>
            </Form>
          </Col>
      </Row>
    </Fragment>
  );
};
export default ProductSidebar;