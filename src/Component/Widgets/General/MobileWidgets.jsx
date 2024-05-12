import React, { Fragment, useState, useEffect} from "react";
import { Card, Col } from "reactstrap";
import { P } from "../../../AbstractElements";
import { MoonSvg } from "../../../Data/svgIcons";
import AnalogClock from 'analog-clock-react';
const MobileWidgets = () => {
  // const date = { date: new Date() };
  const month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  var d = new Date();
  let dateshow =
    month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

    const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let options = {
    width: "180px",
    border: true,
    borderColor: "#2e2e2e",
    // baseColor: "#17a2b8",
    centerColor: "#459cff",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "#d81c7a",
      minute: "#ffffff",
      hour: "#ffffff"
    }
};
    
  return (
    <Fragment>
      <Col xl="3" sm="6" className="box-col-6 xl-50">
        <Card>
          <div className="mobile-clock-widget">
            <div className="bg-svg">
              <MoonSvg />
            </div>
            <div>
            <AnalogClock {...options} />
              <div id="date" className="date f-24 mb-2">
                <span>{dateshow}</span>
                <P attrPara={{ className: "m-0 f-14 text-light" }}>
                  kolkata, India
                </P>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};
export default MobileWidgets;
