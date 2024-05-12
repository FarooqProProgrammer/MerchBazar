import React, { Fragment } from 'react';
import { Media } from 'reactstrap';
import { Image, P } from '../../AbstractElements';
import { IssaBell, MoreCommnets } from '../../Constant';
import imgg from '../../assets/images/user/1.jpg';

const MoreCommentss = () => {
    const comment = 'we are working for the dance and sing songs.this car is very awesome for the youngster.please vote this car and like our post';
    return (
        <Fragment>
            <div className="your-msg">
                <Media>
                    <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} />
                    <div className="media-body">
                        <span className="f-w-600">{IssaBell}
                            <span>1 Year Ago 
                                <i className="fa fa-reply font-primary ps-1"></i>
                            </span>
                        </span>
                        <P>{comment}</P>
                    </div>
                </Media>
            </div>
            <div className="text-center">
                <a className="f-w-600" href="#javascript">{MoreCommnets}</a>
            </div>
        </Fragment>
    );
};
export default MoreCommentss;