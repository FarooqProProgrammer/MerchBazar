import React from 'react';
import { Col, Card, CardBody, Pagination, PaginationItem, PaginationLink, CardHeader } from 'reactstrap';
import { H5, UL } from '../../../AbstractElements';
import { PaginationColor, Previous, Next } from '../../../Constant';

const PaginationColorClass = () => {
    return (
        <Col xl="12">
            <Card>
                <CardHeader className='pb-0'>
                    <H5>{PaginationColor}</H5>
                </CardHeader>
                <CardBody>
                    <Pagination className="m-b-30" aria-label="Page navigation example">
                        <UL attrUL={{ className: 'simple-list pagination pagination-primary flex-row' }}>
                            <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                        </UL>
                    </Pagination>
                    <Pagination className="m-b-30" aria-label="Page navigation example">

                        <UL attrUL={{ className: 'simple-list pagination pagination-secondary flex-row' }}>
                            <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>

                        </UL>
                    </Pagination>
                    <Pagination className="m-b-30" aria-label="Page navigation example">
                        <UL attrUL={{ className: 'pagination pagination-success simple-list flex-row' }}>
                            <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                        </UL>
                    </Pagination>
                    <Pagination className="m-b-30" aria-label="Page navigation example">
                        <UL attrUL={{ className: 'pagination pagination-info simple-list flex-row' }}>
                            <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                        </UL>
                    </Pagination>
                    <Pagination className="m-b-30" aria-label="Page navigation example">
                        <UL attrUL={{ className: 'pagination pagination-warning simple-list flex-row' }}>
                            <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                        </UL>
                    </Pagination>
                    <Pagination aria-label="Page navigation example">
                        <UL attrUL={{ className: 'pagination pagination-danger simple-list flex-row' }}>
                            <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                        </UL>
                    </Pagination>
                </CardBody>
            </Card>
        </Col>
    );
};

export default PaginationColorClass;