import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

// import symbols representing the types
import bugSymbol from '../Images/Types/Bug.png';
import darkSymbol from '../Images/Types/Dark.png';
import dragonSymbol from '../Images/Types/Dragon.png';
import electricSymbol from '../Images/Types/Electric.png';
import fairySymbol from '../Images/Types/Fairy.png';
import fightingSymbol from '../Images/Types/Fighting.png';
import fireSymbol from '../Images/Types/Fire.png';
import flyingSymbol from '../Images/Types/Flying.png';
import ghostSymbol from '../Images/Types/Ghost.png';
import grassSymbol from '../Images/Types/Grass.png';
import groundSymbol from '../Images/Types/Ground.png';
import iceSymbol from '../Images/Types/Ice.png';
import normalSymbol from '../Images/Types/Normal.png';
import poisonSymbol from '../Images/Types/Poison.png';
import psychicSymbol from '../Images/Types/Psychic.png';
import rockSymbol from '../Images/Types/Rock.png';
import steelSymbol from '../Images/Types/Steel.png';
import waterSymbol from '../Images/Types/Water.png';

class RenderPokemon extends Component {
  //capatailize the forst letter of the value
  capitalize = (str) =>  {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
      //create default values
      const stats = ['speed','special-defence','special-attack','defence','attack','hp']
      const symbols = ['', '']; 
      let backgroundColor = "white";

      //dictionary of type to corrisponing symbol and background color
      const typesArray = {"bug" : [bugSymbol,"mediumseagreen"], "dark": [darkSymbol,"darkslategray"],
      "dragon": [dragonSymbol, "teal"], "electric": [electricSymbol, "yellow"], "fairy": [fairySymbol, "pink"],
      "fire": [fireSymbol, "red"], "fighting" : [fightingSymbol, "orange"], "flying" : [flyingSymbol, "white"],
      "grass" : [grassSymbol, "green"], "ground" : [groundSymbol, "sandybrown"], "ghost" : [ghostSymbol, "maroon"],
      "ice": [iceSymbol, "lightskyblue"], "normal" : [normalSymbol, "silver"], "poison" : [poisonSymbol, "purple"],
      "psychic": [psychicSymbol, "plum"], "rock": [rockSymbol, "dimgrey"], "steel" : [steelSymbol, "steel"],
      "water": [waterSymbol, "blue"]};

      //assign the props
      const pokemonData = this.props.pokemonData;

      //convert the height to kg and pounds
      const weightKg = (pokemonData.weight/10).toFixed(1);
      const weightLb = (weightKg * 2.2).toFixed(1);

      //convert the height to feet and meters
      const heightM = (pokemonData.height/10).toFixed(1);
      let heightF = (heightM*3.3).toFixed(2);
      heightF = heightF.split('.').join("\'");
      heightF = heightF + "\"";

      //assign the correct symbol for each type and assign the coresponding background color
      for (let i = 0 ; i < 2; i++){
        for (var key in typesArray){
          if (pokemonData.types[i] === key){
            symbols[i] = typesArray[key][0];
            backgroundColor = typesArray[key][1];
          }
        }
      }

      if (pokemonData.actualName){
        return(
          <div>
            <FadeIn>
              <h1 />
              <div className= "Pokemon-Border" style={{background: backgroundColor}}>

                {/*Display the Pokemons Name */}
                <div className = "Pokemon-PokeNameNum">
                  <h1 style={{marginLeft: 25, marginRight: 25}}>{this.capitalize(pokemonData.actualName)}:  #{pokemonData.pokeIndexNumber}</h1>
                </div>

                <div/>
                <h1 />

                {/*Display the Pokemons front and back Sprite */}
                <div className = "Pokemon-PokePicture" style= {{borderRadius: 1000}} >
                  <img src= {pokemonData.frontSprite} style = {{height: 200, width: 200}} />
                  <img src= {pokemonData.backSprite} style = {{height: 200, width: 200}}/>
                </div>

                  <h1/>

                {/*Display the Words Weight and Height */}
                <div className="Pokemon-RealRow" style= {{marginBottom: -24}}>
                  <h1 className= "Pokemon-SideBySide" >Weight</h1>
                  <h1 className= "Pokemon-SideBySide">Height</h1>
                </div>
                
                {/*Display the Pokemons Height aqnd Weight in imperial and metric units */}
                <div className= "Pokemon-RealRow">
                  <h1 className= "Pokemon-SideBySide" style={{ borderRadius: 75}}>{weightKg} kilogrms {weightLb} lbs</h1>
                  <h1 className= "Pokemon-SideBySide" style={{ borderRadius: 75}}>{heightM} meters {heightF} </h1>
                </div>

                  {/*Display the title Types */}
                  <h1 className= "Pokemon-SideBySide" style= {{marginBottom: 0}} >Type/s</h1>
                  <div/>

                {/*Display the Pokemons first type */}
                <div className= "Pokemon-SideBySide" style= {{borderRadius: 75}}>
                  <h1>{pokemonData.types[0]}</h1>
                  <img src = {symbols[0]}/>
                </div>

                {/*Display the Pokemons second Type if they have one*/}
                {pokemonData.types[1] ? <div className= "Pokemon-SideBySide" style= {{borderRadius: 75}}>
                  <h1>{pokemonData.types[1]}</h1>
                  <img src = {symbols[1]}/>
                </div>  : null }
  
                {/*Display the title Base Stats*/}
                <div/>
                  <h1 className= "Pokemon-BaseStats" style= {{marginBottom: 0}} >Base Stats</h1>
                <div/>

                {/*Display all of the Pokemons Stats*/}
                <div className= "Pokemon-Stats" style= {{borderRadius: 80}}>
                  <h1>{stats[0]}</h1>
                  <h1> {pokemonData.statsNum[0]}</h1>
                </div>

                <div className= "Pokemon-Stats" style= {{borderRadius: 80}}>
                  <h1>{stats[1]}</h1>
                  <h1> {pokemonData.statsNum[1]}</h1>
                </div>

                <div className= "Pokemon-Stats" style= {{borderRadius: 80}}>
                  <h1>{stats[2]}</h1>
                  <h1> {pokemonData.statsNum[2]}</h1>
                </div>

                <div className= "Pokemon-Stats" style= {{borderRadius: 80}}>
                  <h1>{stats[3]}</h1>
                  <h1> {pokemonData.statsNum[3]}</h1>
                </div>

                <div className= "Pokemon-Stats" style= {{borderRadius: 80}}>
                  <h1>{stats[4]}</h1>
                  <h1> {pokemonData.statsNum[4]}</h1>
                </div>

                <div className= "Pokemon-Stats" style= {{borderRadius: 80}}>
                  <h1>{stats[5]}</h1>
                  <h1> {pokemonData.statsNum[5]}</h1>
                </div>

                <h1/>
              </div>
            </FadeIn>
          </div>
        )
      }
      else{
        return(
          <div/>
        )
      }
    }
  }

  export default RenderPokemon;