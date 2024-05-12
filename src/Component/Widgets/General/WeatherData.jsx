import { H4, P } from '../../../AbstractElements';
import React, { Fragment } from 'react';
import { Cloud1, Cloud3, Cloud2 } from '../../../Data/svgIcons';

const WeatheData = () => {
  return (
    <Fragment>
      <div className="media">
        <Cloud1 />
        <div className="media-body align-self-center text-white">
          <H4 attrH4={{ className: 'm-0 f-w-600 num' }}>{'25°C'}</H4>
          <P attrPara={{ className: 'm-0 f-14' }}>{'NewYork'}</P>
        </div>
      </div>
      <div className="media">
        <Cloud2 />
        <div className="media-body align-self-center text-white">
          <H4 attrH4={{ className: 'm-0 f-w-600 num' }}>{'95°F'}</H4>
          <P attrPara={{ className: 'm-0 f-14' }}>{'Peris'}</P>
        </div>
      </div>
      <div className="media">
        <Cloud3 />
        <div className="media-body align-self-center text-white">
          <H4 attrH4={{ className: 'm-0 f-w-600 num' }}>{'50°C'}</H4>
          <P attrPara={{ className: 'm-0 f-14' }}>{'India'}</P>
        </div>
      </div>
    </Fragment>
  );
};
export default WeatheData;