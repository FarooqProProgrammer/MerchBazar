import { H5, P } from '../../../../AbstractElements';
import NewProductSlider from './SliderPage';
import React, { Fragment } from 'react';
import Slider from 'react-slick';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { NewProducts } from '../../../../Constant';

const NewProduct = () => {
  const settings = {
    dots: true,
    arrows: false,
  };
  return (
    <Fragment>
      <Col xl="4" lg="12" md="6" className="box-col-6 new-product-section des-xl-50">
        <Card>
          <CardHeader className="justify-content-between">
            <H5>{NewProducts}</H5>
            <div className="center-content">
              <P>Sold Product</P>
              <span className="m-l-10">84562</span>
            </div>
          </CardHeader>
          <CardBody className="p-t-0">
            <Slider className="slick-dotted" {...settings}>
              <div>
                <NewProductSlider />
              </div>
              <div>
                <NewProductSlider />
              </div>
              <div>
                <NewProductSlider />
              </div>
            </Slider>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default NewProduct;