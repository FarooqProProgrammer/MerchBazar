import React from 'react';
import { Database, ShoppingBag, MessageCircle, UserPlus } from 'react-feather';
import chrom from '../assets/images/dashboard/chrome.png';
import safari from '../assets/images/dashboard/safari.png';
import firefox from '../assets/images/dashboard/firefox.png';
import { Earnings, Products, Messages, NewUser } from '../Constant';

export const TotalEarningData = [
    {
        id: 1,
        num1: '12%',
        year: 'Year',
        num2: '520',
        num3: 'M',
    },
    {
        id: 2,
        num1: '15%',
        year: 'Month',
        num2: '566',
        num3: 'M',
    },
    {
        id: 3,
        num1: '34%',
        year: 'Today',
        num2: '963',
        num3: 'M',
    }
];
export const NumbersUpData = [
    {
        color: 'bg-primary',
        icon: <Database className="icon-bg" />,
        heading: Earnings,
        amount: 6659
    },
    {
        color: 'bg-secondary',
        icon: <ShoppingBag className="icon-bg" />,
        heading: Products,
        amount: 9856
    },
    {
        color: 'bg-primary',
        icon: <MessageCircle className="icon-bg" />,
        heading: Messages,
        amount: 893
    },
    {
        color: 'bg-primary',
        icon: <UserPlus className="icon-bg" />,
        heading: NewUser,
        amount: 4563
    },
];
export const socialHandelData = [
    {
        id: 1,
        class1: 'redial-social-widget radial-bar-70',
        class2: 'fa fa-facebook font-primary',
        title: 'FaceBook'
    },
    {
        id: 2,
        class1: 'redial-social-widget radial-bar-70',
        class2: 'fa fa-twitter font-primary',
        title: 'Twitter'
    },
    {
        id: 3,
        class1: 'redial-social-widget radial-bar-70',
        class2: 'fa fa-linkedin font-primary',
        title: 'Linked In'
    },
    {
        id: 4,
        class1: 'redial-social-widget radial-bar-70',
        class2: 'fa fa-google-plus font-primary',
        title: 'Instagram'
    }
];
export const BrowserWidgetsCardData = [
    {
        id: 1,
        img: chrom,
        title1: 'Daily',
        title2: 'Month',
        title3: 'Week'
    },
    {
        id: 2,
        img: safari,
        title1: 'Daily',
        title2: 'Month',
        title3: 'Week'
    },
    {
        id: 3,
        img: firefox,
        title1: 'Daily',
        title2: 'Month',
        title3: 'Week'
    }
];
export const RecentActivityData = [
    {
        id: 1,
        class: 'me-3 font-primary',
        letter: 'A',
        title: 'Any desktop publishing.',
    },
    {
        id: 2,
        class: 'me-3 font-secondary',
        letter: 'C',
        title: 'Contrary to popular belief. ',
    },
    {
        id: 3,
        class: 'me-3 font-primary',
        letter: 'E',
        title: 'Established fact that a reader.',
    },
    {
        id: 4,
        class: 'me-3 font-secondary',
        letter: 'H',
        title: 'H-Code - A premium portfolio.',
    },
    {
        id: 5,
        class: 'me-3 font-primary',
        letter: 'T',
        title: 'There isnt any hidden.',
    },
];