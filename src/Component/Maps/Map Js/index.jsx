import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import GeoJsonMap from './GeoJsonMap';
import BasicMapComp from './BasicMap';
import MarkerMapComp from './MarkerMap';
import DraggableMarker from './DraggableMarker';

const MapJsContain = () => {

  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <BasicMapComp />
          <MarkerMapComp />
          <DraggableMarker />
          <GeoJsonMap />
        </Row>
      </Container>
    </Fragment>
  );
};

export default MapJsContain;