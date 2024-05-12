import React, { Fragment } from 'react';
import ChartistGraph from 'react-chartist';
import Slider from 'react-slick';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H4, H5, LI, P, UL, Image } from '../../../../AbstractElements';
import { settings } from './sliderSetting';
import { Data } from './Performancedata';

const PerformanceOverview = () => {
  var images = require.context('../../../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      <Col xl="12" className="box-col-12">
        <Card className="perform-overview-sec">
          <CardHeader>
            <H5>Performance Overview</H5>
          </CardHeader>
          <CardBody className="p-t-0">
            <div className="media d-none">
              <div className="badge-groups w-100 px-0">
                <H5 className="font-light">Performance Overview</H5>
              </div>
            </div>
            <Slider {...settings} className="slide-4 overview">
              {
                Data.map((res) =>
                  <div key={res}>
                    <Card >
                      <CardBody>
                        <div className="media">
                          <UL attrUL={{ className: 'simple-list widget-card' }}>
                            <LI><Image attrImage={{
                              className: 'img-fluid me-2', src: `${dynamicImage(res.imagePath)}`, alt: 'Image description'
                            }} />
                              <span className="font-primary">{res.title}</span>
                            </LI>
                            <LI><H4 attrH4={{ className: 'counter' }}>{res.count}</H4></LI>
                            <LI className="star-main"><P>{res.contain}</P>
                              <UL attrUL={{ className: 'simple-list rating-cionlist d-flex flex-row' }}>
                                <LI><i className="fa fa-star"></i></LI>
                                <LI><i className="fa fa-star"></i></LI>
                                <LI><i className="fa fa-star"></i></LI>
                                <LI><i className="fa fa-star"></i></LI>
                                <LI><i className="fa fa-star"></i></LI>
                              </UL>
                            </LI>
                          </UL>
                          <svg viewBox="0 0 0 0" style={{ height: 0, width: 0 }}>
                            <defs>
                              <linearGradient id="gradient-a" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#4d8aff" />
                                <stop offset="100%" stopColor="transparent" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="chartist-main-sec">
                            <ChartistGraph className={res.class} data={res.chartData1}
                              options={res.chartOption1} type={res.chartType}
                              listener={res.event} /> </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                )
              }
              {
                Data.map((res) =>
                  <div key={res}>
                    <Card >
                      <CardBody>
                        <div className="media">
                          <UL attrUL={{ className: 'simple-list widget-card' }}>
                            <LI><Image attrImage={{
                              className: 'img-fluid me-2', src: `${dynamicImage(res.imagePath)}`, alt: 'Image description'
                            }} />
                              <span className="font-primary">{res.title}</span>
                            </LI>
                            <LI><H4 attrH4={{ className: 'counter' }}>{res.count}</H4></LI>
                            <LI className="star-main"><P>{res.contain}</P>
                              <UL attrUL={{ className: 'simple-list rating-cionlist d-flex flex-row' }}>
                                <LI><i className="fa fa-star"></i></LI>
                                <LI><i className="fa fa-star"></i></LI>
                                <LI><i className="fa fa-star"></i></LI>
                                <LI><i className="fa fa-star"></i></LI>
                                <LI><i className="fa fa-star"></i></LI>
                              </UL>
                            </LI>
                          </UL>
                          <svg viewBox="0 0 0 0" style={{ height: 0, width: 0 }}>
                            <defs>
                              <linearGradient id="gradient-b" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#f73164" />
                                <stop offset="100%" stopColor="transparent" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="chartist-main-sec">
                            <ChartistGraph className={res.class} data={res.chartData1}
                              options={res.chartOption1} type={res.chartType}
                              listener={res.event} /> </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                )
              }
              {
                Data.map((res) =>
                  <div key={res}>
                    <Card >
                      <CardBody>
                        <div className="media">
                          <UL attrUL={{ className: 'simple-list widget-card' }}>
                            <LI><Image attrImage={{
                              className: 'img-fluid me-2', src: `${dynamicImage(res.imagePath)}`, alt: 'Image description'
                            }} />
                              <span className="font-primary">{res.title}</span>
                            </LI>
                            <LI><H4 attrH4={{ className: 'counter' }}>{res.count}</H4></LI>
                            <LI className="star-main"><P>{res.contain}</P>
                              <UL attrUL={{ className: 'simple-list rating-cionlist d-flex flex-row' }}>
                                <LI><i className="fa fa-star"></i></LI>
                                <LI><i className="fa fa-star"></i></LI>
                                <LI><i className="fa fa-star"></i></LI>
                                <LI><i className="fa fa-star"></i></LI>
                                <LI><i className="fa fa-star"></i></LI>
                              </UL>
                            </LI>
                          </UL>
                          <svg viewBox="0 0 0 0" style={{ height: 0, width: 0 }}>
                            <defs>
                              <linearGradient id="gradient-c" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#46d15e" />
                                <stop offset="100%" stopColor="transparent" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="chartist-main-sec">
                            <ChartistGraph className={res.class} data={res.chartData1}
                              options={res.chartOption1} type={res.chartType}
                              listener={res.event} /> </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                )
              }
              {
                Data.map((res) =>
                  <div key={res}>
                    <Card >
                      <CardBody>
                        <div className="media">
                          <UL attrUL={{ className: 'simple-list widget-card' }}>
                            <LI><Image attrImage={{
                              className: 'img-fluid me-2', src: `${dynamicImage(res.imagePath)}`, alt: 'Image description'
                            }} />
                              <span className="font-primary">{res.title}</span>
                            </LI>
                            <LI><H4 attrH4={{ className: 'counter' }}>{res.count}</H4></LI>
                            <LI className="star-main"><P>{res.contain}</P>
                              <UL attrUL={{ className: 'simple-list rating-cionlist d-flex flex-row' }}>
                                <LI><i className="fa fa-star"></i></LI>
                                <LI><i className="fa fa-star"></i></LI>
                                <LI><i className="fa fa-star"></i></LI>
                                <LI><i className="fa fa-star"></i></LI>
                                <LI><i className="fa fa-star"></i></LI>
                              </UL>
                            </LI>
                          </UL>
                          <svg viewBox="0 0 0 0" style={{ height: 0, width: 0 }}>
                            <defs>
                              <linearGradient id="gradient-d" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ff781e" />
                                <stop offset="100%" stopColor="transparent" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="chartist-main-sec">
                            <ChartistGraph className={res.class} data={res.chartData1}
                              options={res.chartOption1} type={res.chartType}
                              listener={res.event} /> </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                )
              }
            </Slider>
          </CardBody>
        </Card>
      </Col>
    </Fragment >
  );
};
export default PerformanceOverview;