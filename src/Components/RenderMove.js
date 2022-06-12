import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

//move types with their respectve symbols
const bug = 'https://bit.ly/2v46jsD';
const dark = 'https://bit.ly/2n112he';
const dragon = 'https://bit.ly/2LWCzI8';
const electric = 'https://bit.ly/2vpqr7Q';
const fairy = 'https://bit.ly/2M2qca2';
const fight = 'https://bit.ly/2M6F7A4';
const fire = 'https://bit.ly/2OyCkkD';
const flying = 'https://bit.ly/2OwGBFu';
const ghost = 'https://bit.ly/2vlRuRH';
const grass = 'https://bit.ly/2OyBuV9';
const ground = 'https://bit.ly/2KdqIjZ';
const ice = 'https://bit.ly/2Aszyup';
const normal = 'https://bit.ly/2AoIvF7';
const poison = 'https://bit.ly/2As6seK';
const psychic = 'https://bit.ly/2NTHhDu';
const rock = 'https://bit.ly/2n0wImV';
const steel = 'https://bit.ly/2LC5BNL';
const water = 'https://bit.ly/2OvhbId';

//damage class
const physical = 'https://bit.ly/2M6Hxia';
const special = 'https://bit.ly/2NWzhlo';
const other = 'https://bit.ly/2LIg7CW';

//dictionary that contains strengths, weaknesses, type and background color of every move
const strongWeak = { 
"bug": [[dark,grass, psychic],[fairy,fight,fire,flying,ghost,poison,steel], bug, "mediumseagreen"], 
"dark": [[ghost, psychic],[dark, fairy, fight], dark, "darkslategray"], 
"dragon": [[dragon],[steel, fairy], dragon, "teal"],
"electric": [[water, flying],[dragon, electric, grass], electric, "yellow"],
"fairy" : [[dark, dragon, fight],[fire, poison, steel], fairy, "pink"],
"fighting": [[dark, ice, normal, rock, steel],[bug, fairy, flying, poison, psychic], fight, "orange"],
"fire": [[bug, grass, ice,steel],[dragon, fire, rock, water], fire, "red"],
"flying": [[bug, fight, grass],[electric, rock, steel], flying, "white"],
"ghost" : [[ghost, psychic],[dark, steel], ghost, "maroon"],
"grass": [[ground, rock, water],[bug, dragon, fire, flying, grass, poison, steel], grass, "green"],
"ground": [[electric, fire, poison,rock,steel],[bug,grass], ground, "sandybrown"],
"ice": [[dragon,flying, grass, ground],[fire, ice,steel, water], ice, "lightskyblue"],
"normal": [[],[rock,steel], normal, "silver"],
"poison": [[fairy, grass],[ghost,ground,poison,rock], poison, "purple"],
"psychic": [[fight, poison],[psychic, steel], psychic, "plum"],
"rock": [[bug, fire,flying, ice],[fight, ground,steel], rock, "dimgrey"],
"steel": [[fairy, ice,rock],[electric,fire,steel,water], steel, "steel"],
"water": [[fire,ground,rock],[dragon,grass,water], water, "blue"]
}

class RenderMove extends Component {

  //capatailize the forst letter of the value
  capitalize = (str) =>  {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
    render() {
      //create default values
      let attackTypeSymbol = '';
      let damageClassSymbol = '';
      let strongAgainst = [];
      let weakAgainst = [];
      let backgroundColor = 'white';

      //assign the props
      const moveData = this.props.moveData
      let effect = this.props.moveData.moveEffect.replace("$effect_chance", moveData.moveEffectChance);
      
      //set the attackTypeSymbol to the correct symbol as well as set the corresponding strengths and weaknesses
      for (let key in strongWeak){
        if (moveData.attackType === key){
          for (let i = 0; i < strongWeak[key][0].length; i++){
            strongAgainst.push(strongWeak[key][0][i]);
          }
          for (let i = 0; i < strongWeak[key][1].length; i++){
            weakAgainst.push(strongWeak[key][1][i]);
          }
          attackTypeSymbol = strongWeak[key][2];
          backgroundColor = strongWeak[key][3];
        }
      }

      switch(moveData.damageClass){
        case "physical":
          damageClassSymbol = physical;
          break;

        case "special":
          damageClassSymbol = special;
          break;

        case "other":
          damageClassSymbol = other;
          break;

        case "status":
          damageClassSymbol = other;
          break;
      }

      //if name isnt null, then display 
      if (moveData.attackName){
        return(
          <div>
            <h1 />
            <FadeIn>
              <div className = "Pokemon-Border" style={{background: backgroundColor}}>

                {/*Display the Move Name*/}
                <div className = "Pokemon-PokeNameNum">
                  <h1 style={{marginLeft: 25, marginRight: 25}}>{this.capitalize(moveData.attackName)}</h1>
                </div>

                <div/>
                <h1 />

                {/*Display the Move Type*/}
                <div className= "Pokemon-Stats" style= {{borderRadius: 75}}>
                  <h1>Type</h1>
                  <img src = {attackTypeSymbol} />
                </div>

                {/*Display the Move Category*/}
                <div className= "Pokemon-Stats" style= {{borderRadius: 75}}>
                  <h1>Catagory</h1>
                  <img src = {damageClassSymbol} />
                </div>

                <div/>
                <h1/>

                {/*Display the Moves's Strengths */}
                <div className= "Pokemon-StrongWeak" style= {{borderRadius: 75}}>
                  <h1>Strong Against</h1>
                  <img src = {strongAgainst[0]} /> 
                  <img src = {strongAgainst[1]} /> 
                  <img src = {strongAgainst[2]} /> 
                  <img src = {strongAgainst[3]} />
                  <img src = {strongAgainst[4]} />
                  <img src = {strongAgainst[5]} />
                  <img src = {strongAgainst[6]} />
                  <img src = {strongAgainst[7]} />
                </div> 

                {/*Display the Moves's Weaknesses */}
                <div className= "Pokemon-StrongWeak" style= {{borderRadius: 75}}>
                  <h1>Weak Against</h1>
                  <img src = {weakAgainst[0]} /> 
                  <img src = {weakAgainst[1]} /> 
                  <img src = {weakAgainst[2]} /> 
                  <img src = {weakAgainst[3]} /> 
                  <img src = {weakAgainst[4]} /> 
                  <img src = {weakAgainst[5]} /> 
                  <img src = {weakAgainst[6]} /> 
                  <img src = {weakAgainst[7]} /> 
                </div>

                <h1/>

                {/*Display the Moves PP Cost */}
                <div className= "Pokemon-Stats" style= {{borderRadius: 80}}>
                  <h1>PP Cost</h1>
                  <h1>{moveData.pp}</h1>
                </div>

                {/*Display the Moves's Accuracy */}
                <div className= "Pokemon-Stats" style= {{borderRadius: 80}}>
                  <h1>Accuracy</h1>
                  <h1>{moveData.accuracy}</h1>
                </div>

                <h1/>

                {/*Display how much damage the move does */}
                <div className= "Pokemon-Stats" style= {{borderRadius: 80}}>
                  <h1>Power</h1>
                  <h1>{moveData.power}</h1>
                </div>
                
                {/*Display the Generation which the move first apperaed */}
                <div className= "Pokemon-Stats" style= {{borderRadius: 80}}>
                  <h1>Generation</h1>
                  <h1>{moveData.generation}</h1>
                </div>

                <h1/>

                {/*Display the Moves's Effect (ie paralze, poision etc)*/}
                <div className= "Pokemon-MoveStats" style= {{borderRadius: 75}}>
                  <h1>Effect</h1>
                  <h1>{effect}</h1>
                </div>

                <h1/>
              </div>
            </FadeIn>
       
          </div >
        )
      }
      else{
        return(
          <div/>
        )
      }
    }
  }

  export default RenderMove;