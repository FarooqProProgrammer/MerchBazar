import { P, Image } from '../../../../AbstractElements';
import p1 from '../../../../assets/images/dashboard-2/product-1.png';
import p2 from '../../../../assets/images/dashboard-2/product-2.png';
import p3 from '../../../../assets/images/dashboard-2/product-3.png';
import p4 from '../../../../assets/images/dashboard-2/product-4.png';
import { Col } from 'reactstrap';
import Slider from 'react-slick';
import { Plus } from 'react-feather';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NewProductSlider = () => {
  const setting2 = {
    dots: false,
  };
  return (
    <Fragment>
      <div className="new-product-main">
        <div className="row pro-block">
          <Col sm="6">
            <div className="slid-wrapper">
              <div className="plus-circle float-end"><Plus /></div>
            </div>
            <div className="slider single-item-small">
              <div>
                <Slider {...setting2}>
                  <div className="product-box"><Image attrImage={{ src: `${p1}`, alt: 'First slide' }} />
                    <div className="carousel-content"><Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}><span>Xiaomi Mix1</span></Link>
                      <P>USD 115.00</P> </div>
                  </div>
                  <div className="product-box"><Image attrImage={{ src: `${p1}`, alt: 'First slide' }} />
                    <div className="carousel-content"><Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}><span>Xiaomi Mix2</span></Link>
                      <P>USD 115.00</P> </div>
                  </div>
                  <div className="product-box"><Image attrImage={{ src: `${p1}`, alt: 'First slide' }} />
                    <div className="carousel-content"><Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}><span>Xiaomi Mix3</span></Link>
                      <P>USD 115.00</P> </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
          <Col sm="6">
            <div className="slid-wrapper">
              <div className="plus-circle float-end"><Plus /></div>
            </div>
            <div className="slider single-item-small">
              <Slider {...setting2}>
                <div className="product-box"><Image attrImage={{ src: `${p2}`, alt: 'First slide' }} />
                  <div className="carousel-content"><Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}><span>Xiaomi Speaker</span></Link>
                    <P>USD 94.00</P> </div>
                </div>
                <div className="product-box"><Image attrImage={{ src: `${p2}`, alt: 'First slide' }} />
                  <div className="carousel-content"><Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}><span>Xiaomi Speaker</span></Link>
                    <P>USD 94.00</P></div>
                </div>
                <div className="product-box"><Image attrImage={{ src: `${p2}`, alt: 'First slide' }} />
                  <div className="carousel-content"><Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}><span>Xiaomi Speaker</span></Link>
                    <P>USD 94.00</P></div>
                </div>
              </Slider>
            </div>
          </Col>
          <Col sm="6">
            <div className="slid-wrapper">
              <div className="plus-circle float-end"><Plus /></div>
            </div>
            <div className="slider single-item-small">
              <Slider {...setting2}>
                <div className="product-box"><Image attrImage={{ src: `${p3}`, alt: 'First slide' }} />
                  <div className="carousel-content"><Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}><span>Wireless Mouse</span></Link>
                    <P>USD 30.00</P> </div>
                </div>
                <div className="product-box"><Image attrImage={{ src: `${p3}`, alt: 'First slide' }} />
                  <div className="carousel-content"><Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}><span>Wireless Mouse</span></Link>
                    <P>USD 30.00</P> </div>
                </div>
                <div className="product-box"><Image attrImage={{ src: `${p3}`, alt: 'First slide' }} />
                  <div className="carousel-content"><Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}><span>Wireless Mouse</span></Link>
                    <P>USD 30.00</P> </div>
                </div>
              </Slider>
            </div>
          </Col>
          <Col sm="6">
            <div className="slid-wrapper">
              <div className="plus-circle float-end"><Plus /></div>
            </div>
            <div className="slider single-item-small">
              <Slider {...setting2}>
                <div className="product-box"><Image attrImage={{ src: `${p4}`, alt: 'First slide' }} />
                  <div className="carousel-content"><Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}><span>Wireless Earbuds</span></Link>
                    <P>USD 102.00</P>
                  </div>
                </div>
                <div className="product-box"><Image attrImage={{ src: `${p4}`, alt: 'First slide' }} />
                  <div className="carousel-content"><Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}><span>Wireless Earbuds</span></Link>
                    <P>USD 102.00</P>
                  </div>
                </div>
                <div className="product-box"><Image attrImage={{ src: `${p4}`, alt: 'First slide' }} />
                  <div className="carousel-content"><Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}><span>Wireless Earbuds</span></Link>
                    <P>USD 102.00</P>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
        </div>
      </div>
    </Fragment>
  );
};
export default NewProductSlider;