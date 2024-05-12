import { H4, H5, Image, P } from '../../../AbstractElements';
import { IMAGE_GALLERY, PortfolioTitle } from '../../../Constant';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';

const ListOfImageDesc = ({ smallImages, setPhotoIndex, photoIndex }) => {
  const description = 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.';
  return (
    <Fragment>
      {smallImages.length > 0 &&
        <Col sm="12">
          <Card>
            <CardHeader className='pb-0'>
              <H5>{IMAGE_GALLERY}</H5>
            </CardHeader>
            <CardBody className="my-gallery row gallery-with-description">
              {
                smallImages && smallImages.map((item, i) => {
                  return (
                    <figure className="col-xl-3 col-sm-6" key={i}><a href="#javascript" data-size="1600x950">
                      <Image
                        attrImage={{
                          src: require(`../../../assets/images/${item}`),
                          alt: 'Gallery',
                          className: 'img-thumbnail',
                          onClick: () =>
                            setPhotoIndex({ ...photoIndex, index: i, isOpen: true })
                        }}
                      />
                      <div className="caption">
                        <H4>{PortfolioTitle}</H4><P>{description}</P></div></a>
                    </figure>
                  );
                })}
            </CardBody>
          </Card>
        </Col>
      }
    </Fragment>
  );
};

export default ListOfImageDesc;
