import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

import Pokeball from '../../Images/Logos/PokemonLogo.png';

class RenderLoadingIcon extends Component {

    render() {

        const name = this.props.name;

        return(
            <div className= 'Pokemon-Pokemon'>
                <FadeIn>
                    <img src= {Pokeball} className= "Pokemon-App-logo"/>
                    <h1 className = "Loading-Icon">{name}</h1>
                </FadeIn>
            </div>
        );
    }
}

export default RenderLoadingIcon;
