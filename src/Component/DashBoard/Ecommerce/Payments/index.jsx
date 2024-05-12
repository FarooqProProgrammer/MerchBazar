import { H1, H6, LI, UL, Image, H5 } from '../../../../AbstractElements';
import { PaymentSlider } from '../../../../Data/DashEcommerce';
import lastCard from '../../../../assets/images/dashboard-2/card-last.png';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';

const Payment = () => {
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);
  const { nav1, nav2 } = state;
  var images = require.context('../../../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      <Col xl="4" lg="12" md="6" className=" box-col-6 des-xl-50">
        <Card className="o-hidden payment-sec-main">
          <CardHeader >
            <H5 attrH5={{ className: 'font-light' }}>Payment</H5>
          </CardHeader>
          <CardBody className="p-t-0">
            <div className="payment-main">
              <div className="owl-carousel owl-theme" id="sync1">
                <Slider
                  asNavFor={nav2} arrows={false} ref={slider => (slider1.current = slider)}>
                  {
                    PaymentSlider.map((item) => {
                      return (
                        <div className="item p-0" key={item.id}>
                          <div className="visa-card">
                            <div className="card-logo">
                              <Image attrImage={{ className: 'img-fluid', src: `${dynamicImage(item.img)}`, alt: '' }} />
                            </div>
                            <UL attrUL={{ className: 'simple-list d-flex flex-row card-number' }}>
                              <LI>{item.star}</LI>
                              <LI>{item.star}</LI>
                              <LI>{item.star}</LI>
                              <LI>{item.number}</LI>
                            </UL>
                            <H6 attrH6={{ className: 'carl-holder' }}>{item.name}</H6>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="valid-thru">
                                <span>{item.valid}</span>
                                <span className="vdate">{item.vdate}</span>
                              </div>
                              <a className="card-btn" href="#javascript">{item.btn} 
                                <i className="fa fa-arrow-circle-right font-primary"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                  <div className="item">
                    <H1>4</H1></div>
                </Slider>
              </div>
              <H5 attrH5={{ className: 'font-light' }}>Active Card</H5>
              <div className="owl-carousel owl-theme" id="sync2">
                <Slider asNavFor={nav1} ref={slider => (slider2.current = slider)} slidesToShow={4} swipeToSlide={true} focusOnSelect={true} infinite={true} arrows={true} >
                  {
                    PaymentSlider.map((item) => {
                      return (
                        <div className="item" key={item.id}>
                          <Image attrImage={{ src: `${dynamicImage(item.img)}`, alt: '' }} />
                          <div className="check-circle">
                            <i className="fa fa-check"></i>
                          </div>
                        </div>
                      );
                    })
                  }
                  <div className="item"><Image attrImage={{ src: `${lastCard}`, alt: '', dataoriginaltitle: '', title: '' }} />
                    <div className="check-circle">
                      <i className="fa fa-check"></i>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default Payment;