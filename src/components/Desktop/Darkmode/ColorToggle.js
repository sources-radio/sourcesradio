import React from 'react';

export default function ColorToggle(props) {

  return (
    <button
      style={{
        borderRadius: '50%',
        width: "23px",
        height: "23px",
        backgroundColor: props.data.textColor,
        color: props.data.textColor,
        borderColor: props.data.textColor,
        border: "none",
        padding: 0,
        font: "inherit",
        cursor: 'pointer',
        outline: 'inherit',
        position: 'absolute',
        right: '30px',
        top: '24px',
        transitionProperty: 'background-color',
        transitionDuration: '0.5'
      }}
      onClick={props.data.toggleColor}
    >
    </button>
  );
}
