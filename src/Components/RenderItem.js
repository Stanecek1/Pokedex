import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

class RenderItem extends Component {

  //capatailize the forst letter of the value
  capitalize = (str) =>  {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {

      //assign the props
      const name = this.props.itemName;
      const category = this.props.category;
      const cost = this.props.cost;
      const effect = this.props.itemEffect;
      const sprite = this.props.sprite;
      const attributes = this.props.attributes;

      //sets the defualt bacground color to white
      let backgroundColor = 'white';

      //sets the background color that corrisponds with the category of item
      const bgColorArray = {"healing": "green", "evolution": "gold", "standard-balls": "red", "vitamins": "sandybrown",
      "gameplay": "silver", "dex-completion": "blue", "bad-held-items": "purple", "spelunking": "teal", "all-machines": "oragne",
      "collectibles": "yellow", "loot": "maroon", "held-items": "grey"}

      //sets the background color
      for (let key in bgColorArray){
        if (category == key){
          backgroundColor = bgColorArray[key];
        }
      }

      //if name isnt = null, then display the details of the item
      if (name){
        return(
          <div>
            <h1/>
            <FadeIn>
              {/*Display the Border*/}
              <div className= "Pokemon-Border" style={{background: backgroundColor}}>

                {/*Display the Item Name*/}
                <div className = "Pokemon-PokeNameNum">
                  <h1 style={{marginLeft: 25, marginRight: 25}}>{this.capitalize(name)}</h1>
                </div>
                  
                <div/>
                <h1 />

                {/*Display the Item Sprite*/}
                <div className = "Pokemon-ItemPicture" style= {{borderRadius: 1000}} >
                  <img src= {sprite} style = {{height: 100, width: 100}} />
                </div>

                <h1/>

                {/*Display the Item Cost*/}
                <div className= "Pokemon-Stats" style= {{borderRadius: 80}}>
                  <h1>Cost</h1>
                  <h1>{cost}</h1>
                </div>

                {/*Display the Item Effect*/}
                <div className= "Pokemon-Stats" style= {{borderRadius: 80}}>
                  <h1>Effect</h1>
                  <h1>{effect}</h1>
                </div>

                <h1/>
                  
                {/*Display the Item Category*/}
                <div className= "Pokemon-Stats" style= {{borderRadius: 80}}>
                  <h1>Category</h1>
                  <h1>{category}</h1>
                </div>

                {/*Display the Item Attirbutes*/}
                <div className= "Pokemon-Stats" style= {{borderRadius: 80}}>
                  <h1>Attributes</h1>
                  <h1>{attributes[0]} {attributes[1]} {attributes[2]} {attributes[3]}</h1>
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

  export default RenderItem;