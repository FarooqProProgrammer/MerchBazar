import React, { Fragment } from 'react';
import { Input, Media } from 'reactstrap';
import { Image } from '../../AbstractElements';
import smily from '../../assets/images/smiley.png';
import imgg from '../../assets/images/user/1.jpg';

const ApplyComments = () => {
    return (
        <Fragment>
            <div className="comments-box">
                <Media>
                    <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} /><div className="media-body">
                        <div className="input-group text-box">
                            <Input className="form-control input-txt-bx" type="text" name="message-to-send" placeholder="Post Your commnets" />
                            <div className="input-group-text">
                                <Image attrImage={{ src: `${smily}`, alt: '', }} /></div>
                        </div>
                    </div>
                </Media>
            </div>
        </Fragment>
    );
};
export default ApplyComments;