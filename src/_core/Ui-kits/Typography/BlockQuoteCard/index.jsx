import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { BlockQuotes, Footer, H5, P } from '../../../../AbstractElements';
import { Blockquotes, SourceTitle } from '../../../../Constant/index';

const BlockQuoteCard = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{Blockquotes}</H5><span>{'Add a'} <code>&lt;{'footer className=\'blockquote-footer\''}&gt;</code> {'for identifying the source. Wrap the name of the source work in'} <code>&lt;{'cite'}&gt;</code>.</span>
        </CardHeader>
        <CardBody>
          <P attrPara={{ className: 'sub-title' }}>{'Naming a source'}</P>
          <BlockQuotes attrBlockQuote={{ className: 'blockquote' }}>
            <P attrPara={{ className: 'mb-0' }}>{'Lorem ipsum dolor sit amet'}{', consectetur adipiscing elit. Integer posuere erat a ante.'}</P>
            <Footer attrFooter={{ className: 'blockquote-footer' }}>{'Someone famous in'}
              <cite title="Source Title">{SourceTitle}</cite>
            </Footer>
          </BlockQuotes>
          <P attrPara={{ className: 'sub-title' }} >{'Alignment Center'}</P>
          <BlockQuotes attrBlockQuote={{ className: 'blockquote text-center' }} >
            <P attrPara={{ className: 'mb-0' }} >{'Lorem ipsum dolor sit amet'}{', consectetur adipiscing elit. Integer posuere erat a ante.'}</P>
            <Footer attrFooter={{ className: 'blockquote-footer' }}>{'Someone famous in'}
              <cite title="Source Title">{SourceTitle}</cite>
            </Footer>
          </BlockQuotes>
          <P attrPara={{ className: 'sub-title' }}>{'Alignment Right'}</P>
          <BlockQuotes attrBlockQuote={{ className: 'blockquote text-end mb-0' }} >
            <P attrPara={{ className: 'mb-0' }}>{'Lorem ipsum dolor sit amet'}{', consectetur adipiscing elit. Integer posuere erat a ante.'}</P>
            <Footer attrFooter={{ className: 'blockquote-footer' }}>{'Someone famous in'}
              <cite title="Source Title">{SourceTitle}</cite>
            </Footer>
          </BlockQuotes>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BlockQuoteCard;