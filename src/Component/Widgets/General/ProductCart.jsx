import React, { Fragment } from 'react';
import { H5 } from '../../../AbstractElements';
import { Card, CardBody, CardHeader, Col, Table } from 'reactstrap';
import { cartProducts } from '../../../Data/employee';
import { Details, Price, ProductsCart, Quantity, Status } from '../../../Constant';
import { Link } from 'react-router-dom';

const ProductCart = () => {
  return (
    <Fragment>
      <Col xl="6" md='6' className="box-col-12">
        <Card>
          <CardHeader className="pb-0 d-flex justify-content-between align-items-center">
            <H5>{ProductsCart}</H5>
          </CardHeader>
          <CardBody>
            <div className="user-status table-responsive">
              <Table borderless>
                <thead>
                  <tr>
                    <th scope="col">{Details}</th>
                    <th scope="col">{Quantity}</th>
                    <th scope="col">{Status}</th>
                    <th scope="col">{Price}</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map(data => (
                    <tr key={data.id}>
                      <td><Link to={`${process.env.PUBLIC_URL}/ecommerce/cart`}>{data.details}</Link></td>
                      <td>{data.qty}</td>
                      <td className={`font-${data.statusColor}`}>{data.status}</td>
                      <td>
                        <div className={`span badge rounded-pill rounded-pill ${data.className}`}>{data.price}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default ProductCart;