import { Image } from '../../../../AbstractElements';
import { ServiceContactdata } from '../../../../Data/DashEcommerce';
import React, { Fragment } from 'react';
import { Table } from 'reactstrap';
import { Date, Name, Quantity } from '../../../../Constant';
import { Link } from 'react-router-dom';

const ServiceContact = () => {
  return (
    <Fragment>
      <div className="top-sell-table">
        <div className="item">
          <div className="table-responsive product-list">
            <Table borderless>
              <thead>
                <tr>
                  <th>{Name}</th>
                  <th>{Date}</th>
                  <th>{Quantity}</th>
                  <th>% of sale</th>
                  <th>Total Revenue</th>
                </tr>
              </thead>
              <tbody>
                {
                  ServiceContactdata.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td> <span>{item.srno}</span>
                          <div className="t-title">
                            <Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}>
                              <Image attrImage={{ className: 'img-40 rounded-circle align-top', src: `${item.img}`, alt: '' }} />
                            </Link>
                            <div className="d-inline-block align-middle">
                                <span>
                                  <Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}>{item.product}</Link>
                                </span>
                            </div>
                          </div>
                        </td>
                        <td>{item.time}</td>
                        <td>{item.qty}</td>
                        <td>
                          <i className={item.class}></i>{item.discount}
                        </td>
                        <td>{item.prize}</td>
                        <td>{item.status}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ServiceContact;