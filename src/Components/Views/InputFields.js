import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

export default class InputFields extends React.Component{
    render(){
      return(
        <div>
            {/*Display the Pokemon input field*/}
            <div className="Pokemon-InputRowName" > 
                <FadeIn>
                <input
                placeholder="Enter a Pokemon Name or Number"
                id="pokemon"
                style={{textAlign: 'center', fontFamily: "impact" , height: 40, width: 300, background: 'orange' }}
                />
                </FadeIn>
            </div>
            {/*Display the Move input field*/}
            <div className="Pokemon-InputRowMove">
                <FadeIn>
                <input
                placeholder="Enter a Move"
                id="move"
                style={{textAlign: 'center', fontFamily: "impact" , height: 40, width: 300, background: 'orange' }}
                />
                </FadeIn>
            </div>
            {/*Display the Item input field*/}
            <div className="Pokemon-InputRowItem">
                <FadeIn>
                <input
                placeholder="Enter an Item Name"
                id="item"
                style={{textAlign: 'center', fontFamily: "impact" , height: 40, width: 300, background: 'orange' }}
                />
                </FadeIn>
            </div>
        </div>
      )
    }
}