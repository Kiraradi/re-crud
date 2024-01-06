import React from 'react';

import './button.css';

export interface buttonStyle {
    buttonView: string
    onClick: any
    additionalClass?: string
}

export default function Button(props: buttonStyle) {
  return (
    <>
        <span className={"material-symbols-outlined button " + props.additionalClass} onClick={props.onClick}>{props.buttonView}</span>
    </>
    
  )
}
