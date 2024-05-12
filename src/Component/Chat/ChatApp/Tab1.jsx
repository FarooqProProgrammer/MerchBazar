import React, { Fragment, useContext } from 'react';
import { Image, LI, UL } from '../../../AbstractElements';
import ChatAppContext from '../../../_helper/chat-app';

const Tab1 = () => {
    const { allMemberss } = useContext(ChatAppContext);
    return (
        <Fragment>
            <div className="people-list">
                <UL attrUL={{ as: 'ul', className: 'simple-list list digits custom-scrollbar' }}>
                    {allMemberss.map((member, i) => {
                        return (
                            <LI attrLI={{ className: 'clearfix' }} key={i}>
                                <Image attrImage={{
                                    className: 'rounded-circle user-image'
                                    , src: `${require(`../../../assets/images/${member.thumb}`)}`, alt: ''
                                }} />
                                <div className="about">
                                    <div className="name">{member.name}</div>
                                    <div className="status">
                                        <i className={member.reply}></i>{member.time}
                                    </div>
                                </div>
                            </LI>
                        );
                    }
                    )}
                </UL>
            </div>
        </Fragment>
    );
};
export default Tab1;