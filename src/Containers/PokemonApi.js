import React, { Component } from 'react';

import Header from "../Components/Views/Header.js";
import InputFields from "../Components/Views/InputFields.js";
import RenderLoadingIcon from '../Components/Views/loadingIcon'

import RenderPokemon from '../Components/RenderPokemon';
import RenderMove from '../Components/RenderMove';
import RenderItem from '../Components/RenderItem';
import PokemonData from '../Data/PokemonData';
import MoveData from '../Data/MoveData';

import FadeIn from 'react-fade-in';


//set the json data links
const pokemonLink = 'https://pokeapi.co/api/v2/pokemon/';
const moveLink = 'https://pokeapi.co/api/v2/move/';
const itemLink = 'https://pokeapi.co/api/v2/item/';

let loadingPokemon = false;
let loadingMove = false;
let loadingItem = false;

class PokemonAPI extends Component {
  state = {
    pokemonData: new PokemonData(),
    moveData: new MoveData(),
    //states for move json data

    //states for item json data
    itemName: '',
    category: '',
    cost: '',
    itemEffect: '',
    sprite: '',
    attributes: []
  }

  collectDataResponse = (data, dataType) => {
    //if were collecting data for a pokemon
    if (dataType === 0){
        this.setState({
            pokemonData : {
              actualName: data.name,
              frontSprite: data.sprites.front_default,
              backSprite: data.sprites.back_default,
              weight: data.weight,
              height: data.height,
              pokeIndexNumber: data.id,
              types: data.types,
              statsNum: data.stats
            },
        })
        //console.log("DATA: ",this.pokemonData.actualName);
        //collect the type of pokemon
        let tempTypes = this.state.pokemonData.types.slice();
        tempTypes[0] = data.types[0].type.name;
        //if the pokemon has 2 different types
        if(data.types.length === 2){
            tempTypes[1] = data.types[1].type.name
        }
        //if not, set the second type to null
        else{
            tempTypes[1] = null
        }
        // this.setState({types: tempTypes});
        this.setState({pokemonData: {...this.state.pokemonData, types: tempTypes}})

        //collect the base stats of the pokemon
        for(let i = 0; i < 6; i++){
          let tempStatsNum = this.state.pokemonData.statsNum.slice();
          tempStatsNum[i] = data.stats[i].base_stat;

          // this.setState({statsNum: tempStatsNum})
          this.setState({pokemonData: {...this.state.pokemonData, statsNum: tempStatsNum}})
        }
        //remove the loading icon
        loadingPokemon = false;
        this.forceUpdate();
        

    }
    //if were collecting data for a move
    if (dataType === 1){
      this.setState({ 
        moveData:{
          attackName: data.name,
          pp: data.pp,
          accuracy: data.accuracy,
          power: data.power,
          generation: data.generation.name,
          damageClass: data.damage_class.name,
          moveEffectChance: data.effect_chance,
          moveEffect: data.effect_entries[0].short_effect,
          attackType: data.type.name,
        }
      })
      //remove the loading icon
      loadingMove = false;
      this.forceUpdate();

    }

    //if were collecting data for an item
    if (dataType === 2){
      this.setState({
        itemName: data.name,
        category: data.category.name,
        cost: data.cost,
        itemEffect: data.effect_entries[0].short_effect,
        sprite: data.sprites.default  
      })
      let attributesTemp = [];
      for(let i = 0; i < data.attributes.length; i++){
        
        attributesTemp.push(data.attributes[i].name);
      }

      if (data.attributes.length == 0){
        attributesTemp.push('None');
      }
      this.setState({attributes: attributesTemp});
    }
    //remove the loading icon
    loadingItem = false;
    this.forceUpdate();
  }

  error = () => {
    alert("please sumbit a value");
  }

  getPokemon = () => {
    //get the value of what was typed into the pokemon search bar
    let pokemonNameTemp =  document.getElementById('pokemon').value
    if (pokemonNameTemp){
      //make it so the value has no capitals
      pokemonNameTemp = pokemonNameTemp.toLowerCase();
      //create the endpoint
      const pokemonEndpoint = `${pokemonLink}${pokemonNameTemp}`;
      console.log(pokemonEndpoint);
      //gte pokemon json data 
      loadingPokemon = true;
      this.forceUpdate();
      this.getJsonData(pokemonEndpoint, 0);
    }
    else {
      this.error();
    }
  }

  getMove = () => {
    let moveNameTemp = document.getElementById('move').value;
    if (moveNameTemp){
      //make it so the value has no capitals or spaces
      moveNameTemp = moveNameTemp.toLowerCase();
      moveNameTemp = moveNameTemp.split(' ').join("-");
      //create the endpoint
      const moveEndpoint = `${moveLink}${moveNameTemp}`;
      //get move json data
      loadingMove = true;
      this.forceUpdate();
      this.getJsonData(moveEndpoint, 1);
    }
    else {
      this.error();
    }
  }

  getItem = () => {
    let itemNameTemp = document.getElementById('item').value;
    if (itemNameTemp){
      //make it so the value has no capitals or spaces
      itemNameTemp = itemNameTemp.toLowerCase();
      itemNameTemp = itemNameTemp.split(' ').join("-");
      //create the endpoint
      const itemEndpoint = `${itemLink}${itemNameTemp}`;
      //get item json data
      loadingItem = true;
      this.forceUpdate();
      this.getJsonData(itemEndpoint, 2);
    }
    else {
      this.error();
    }
  }

  getJsonData = (endpoint, dataType) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      //calls collectDataResponse with the JSON data
      console.log("Response: ", xhr.response)
      if (xhr.response != null){
        this.collectDataResponse(xhr.response, dataType);
      }
      else{
        loadingPokemon = false;
        loadingItem = false;
        loadingMove = false;
        this.forceUpdate();
      }
      }
    }
    xhr.open('GET', endpoint);
    xhr.send();
  }

  render(){
    return (
      <div className="Pokemon-App">
      
        <Header></Header>
        <InputFields></InputFields>

        <div className="Pokemon-Row">
          {/*Display the Submit Pokemon button*/}

          <div className="Pokemon-Column">
              <FadeIn>
              <button 
              className="Pokemon-Button"
              style={{height: 40, width: 200}}
              onClick={this.getPokemon}
              >Submit Pokemon
              </button>
              </FadeIn>
          </div>

          {/*Display the Submit Move button*/}
          <div className="Pokemon-Column">
              <FadeIn>
              <button 
              className="Pokemon-Button"
              style={{height: 40, width: 200}}
              onClick={this.getMove}
              >Submit Move
              </button>
              </FadeIn>
          </div>

          {/*Display the Submit Item button*/}
          <div className="Pokemon-Column">
              <FadeIn>
              <button 
              className="Pokemon-Button"
              style={{height: 40, width: 200}}
              onClick={this.getItem}
              >Submit Item
              </button>
              </FadeIn>
          </div>
        </div>

        {/*Display the RenderPokemon Component*/}
        {loadingPokemon ? 
          <RenderLoadingIcon name = "Loading Pokemon"/> : 
          <div className= 'Pokemon-Pokemon'>
              <RenderPokemon pokemonData = {this.state.pokemonData}/>
          </div>
        }

          {/*Display the RenderMove Component*/}
          {loadingMove ? 
          <RenderLoadingIcon name = "Loading Move"/> : 
          <div className= 'Pokemon-Test'>
            <RenderMove moveData={this.state.moveData}/>
          </div>
        }

          {/*Display the RenderItem Component*/}
          {loadingItem ? 
          <RenderLoadingIcon name = "Loading Item"/> : 
          <div className='Pokemon-Test'>
            <RenderItem itemName ={this.state.itemName} category ={this.state.category} cost ={this.state.cost} 
            itemEffect= {this.state.itemEffect} sprite ={this.state.sprite} attributes ={this.state.attributes}/>
          </div>
          }
      </div>
    )
  }
}

export default PokemonAPI
