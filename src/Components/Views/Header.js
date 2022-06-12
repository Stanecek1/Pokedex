import React, { Component } from 'react';

//import animations
import Haunter from '../../Images/Animations/Haunter.gif';
import CoolPika from '../../Images/Animations/CoolPika.gif';
import PikaRun from '../../Images/Animations/PikaRun.gif';

//import the background
import PokemonBackground from '../../Images/Backgrounds/PokemonBackground.jpg'

//import Pokeball logo
import Pokeball from '../../Images/Logos/PokemonLogo.png';

export default class Header extends React.Component{
  render(){
    return(
    <div>
      {/*Display the Header which includeds the logo, the picachoes and the title*/}
      <header className="Pokemon-App-header">
          <img src= {Pokeball} className= "Pokemon-App-logo"  />
          <img src = {Haunter} className = "Pokemon-Haunter" />
          <img src = {CoolPika} className = "Pokemon-CoolPika" />
          <img src = {PikaRun} className= 'Pokemon-Pika-Run-On-Ball' />
          <h1 className="Pokemon-App-title">Pokemon API</h1>
      </header>

      <div>
        {/*Display the Body which includes the background image and the instructions*/}
        <body >
          <img className="Pokemon-BackgroundImage" src={PokemonBackground}/>
          <p className="Pokemon-App-intro">
            Search by one of the following
          </p>
        </body>
      </div>
    </div>
    )
  }
}