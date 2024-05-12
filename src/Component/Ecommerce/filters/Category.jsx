import React, { Fragment, useContext, useState } from 'react';
import { Input, Label } from 'reactstrap';
import { Range, getTrackBackground } from "react-range";
import { H6, LI, UL } from '../../../AbstractElements';
import { Brand, Colors, Price, MAX, MIN, STEP } from '../../../Constant';
import { getBrands, getColors, getGender, getMinMaxPrice } from '../../../Services/Ecommerce.Service';
import FilterContext from '../../../_helper/ecommerce/filter';
import ProductContext from '../../../_helper/ecommerce/product';

const Category = () => {
  const { productItem } = useContext(ProductContext);
  const { filter, filterColor, filterCategory, filterBrand, filterPrice, value, } = useContext(FilterContext);
  const colors = getColors(productItem);
  const [values, setValues] = useState([150, 650]);
  const colorHandle = (event, color) => {
    var elems = document.querySelectorAll('.color-selector ul li');
    [].forEach.call(elems, function (el) {
      el.classList.remove('active');
    });
    event.target.classList.add('active');
    filterColor(color);
  };
  const brands = getBrands(productItem);
  const gender = getGender(productItem);
  const step = STEP;
  const min = MIN;
  const max = MAX;
  const clickBrandHendle = (event, brands) => {
    var index = brands.indexOf(event.target.value);
    if (event.target.checked === true)
      brands.push(event.target.value);
    else
      brands.splice(index, 1);
    filterBrand(brands);
  };
  const prices = getMinMaxPrice(productItem);
  const ClickCategory = (result, event) => {
    var elems = document.querySelectorAll('div.checkbox-animated');
    [].forEach.call(elems, function (el) {
      el.classList.remove('active');
    });
    event.target.classList.add('active');
    filterCategory(result);
  };
  const priceHandle = (value) => {
    setValues(value);
    filterPrice(value)
  }
  return (
    <Fragment>
      <div className="product-filter">
        <H6 className="f-w-600">Category</H6>
        <div className="checkbox-animated mt-0" >
          {gender.map((item, i) => {
            return (
              <Label className="d-block" key={i}>
                <Input className="radio_animated" type="radio" name="name" value={item} onClick={(e) => ClickCategory(item, e)} />{item}
              </Label>
            );
          })}
        </div>
      </div>
      <div className="product-filter">
        <H6 attrH6={{ className: 'f-w-600' }}>{Brand}</H6>
        <div className="checkbox-animated mt-0">
          {brands.map((brand, index) => {
            return (
              <Label className="d-block" key={index}>
                <Input className="checkbox_animated" onClick={(e) => clickBrandHendle(e, filter.brand)}
                  value={brand} defaultChecked={filter.brand.includes(brand) ? true : false} id={brand} type="checkbox" data-original-title="" title="" />
                {brand}
              </Label>
            );
          })}
        </div>
      </div>
      <div className="product-filter slider-product">
        <H6 attrH6={{ className: 'f-w-600' }}>{Colors}</H6>
        <div className="color-selector">
          <UL attrUL={{ className: 'simple-list d-flex flex-row' }}>
            {colors.map((color, i) => {
              return (
                <Fragment key={i}>
                  <LI attrLI={{ className: color, title: color, onClick: e => colorHandle(e, color) }}></LI> &nbsp;
                </Fragment>
              );
            })}
          </UL>
        </div >
      </div >
      <div className="product-filter pb-0">
        <H6 attrH6={{ className: 'f-w-600' }}>{Price}</H6>
        {/* <InputRange maxValue={prices.max} minValue={prices.min}
          value={value} onChange={(value) => {
            filterPrice(value);
          }}
        /> */}
        <Range
          values={values}
          step={step}
          min={prices.min}
          max={prices.max}
          onChange={values => {
            priceHandle(values);
          }}
          renderTrack={({ props, children }) => (
            <div
              className='price-range'
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%"
              }}
            >
              <output style={{ marginTop: "30px" }}>
                {values[0]}
              </output>
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values,
                    colors: ["#ccc", "#4d8aff", "#ccc"],
                    min: min,
                    max: max
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
              <output style={{ marginTop: "30px" }}>
                {values[1]}
              </output>
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "16px",
                width: "16px",
                borderRadius: "60px",
                backgroundColor: "#4d8aff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA"
              }}
            >
            </div>

          )}
        />
      </div>
    </Fragment >
  );
};

export default Category;