/* eslint-disable react/prop-types */
import React from 'react';

export function SampleNextArrow(props) {
  const {
    className, style, onClick, onKeyPressHandler,
  } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        background: '#97BF0F',
        width: '60px',
        height: '40px',
        borderRadius: '50px 0 0 50px',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        paddingLeft: '10px',
        position: 'absolute',
        right: '-25px',
        zIndex: 50,
      }}
      onClick={onClick}
      onKeyPress={onKeyPressHandler}
      role="button"
      tabIndex={0}
    >
      Next
    </div>
  );
}

export function SamplePrevArrow(props) {
  const {
    className, style, onClick, onKeyPressHandler,
  } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: '#97BF0F',
        width: '60px',
        height: '40px',
        borderRadius: '0 50px 50px 0',
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        paddingRight: '10px',
        position: 'absolute',
        left: '0px',
        zIndex: 50,
      }}
      onClick={onClick}
      onKeyPress={onKeyPressHandler}
      role="button"
      tabIndex={0}
    >
      Nex

    </div>
  );
}
