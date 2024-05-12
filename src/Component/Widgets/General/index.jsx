import React, { Fragment } from 'react';
import BrowserWidgetsCard from './BrowserWidgetsCard';
import CalendarWidgets from './CalendarWidgets';
import ContactUsWidgets from './ContactUsWidgets';
import DeveloperProfile from './DeveloperProfile';
import Earnings from './Earnings';
import EmoployeeStatus from './EmployeeStatus';
import GeneralCalendar from './GeneralCalendar';
import ManagerProfile from './ManagerProfile';
import MobileWidgets from './MobileWidgets';
import ProductCart from './ProductCart';
import RecentActivity from './RecentActivity';
import Sales from './Sales';
import SocialHandle from './SocialHandle';
import WeatherWidgets from './WeatherWidget';

const GeneralContain = () => {
  return (
    <Fragment>
      <div className="container-fluid general-widget">
        <div className="row">
          <Earnings />
          <Sales />
          <GeneralCalendar />
          <MobileWidgets />
          <WeatherWidgets />
          <RecentActivity />
          <ManagerProfile />
          <DeveloperProfile />
          <SocialHandle /> 
          <BrowserWidgetsCard />
          <ProductCart />
          <EmoployeeStatus />
          <CalendarWidgets />
          <ContactUsWidgets />
        </div>
      </div>
    </Fragment>
  );
};
export default GeneralContain;