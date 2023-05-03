import React from 'react';
import '../scss/components/button.scss';
interface ButtonType {
  className: string;
  children: React.ReactNode;
  blank?: boolean;
  cart?: boolean;
}
const Button = (props: ButtonType) => {
  return (
    <button
      className={`${props.className} myButton ${props.blank === true ? 'blank' : ''} ${
        props.cart === true ? 'cart' : ''
      }`}>
      {props.children}
    </button>
  );
};

export default Button;
