import PokemonData from "../../types/pokemons";
import axiosApi from "./../axio";

/* export const pokemonName = async () => {
  var endpoints = []
  for (let i = 1; i <= 50; i++) {
    const response = await axiosApi.get(`/pokemon/${i}/`);
    var responseData = response.data.forms[0]
    endpoints.push(responseData)
  }
  return endpoints;
}; */

export const firstGeneration = async () => {
  var endpoints = []
  for (let i = 1; i <= 151; i++) {
    const response = await axiosApi.get<PokemonData>(`/pokemon/${i}/`);
    var responseData = response.data
    endpoints.push(responseData)
  }
  return endpoints;
  
};

export const secondGeneration = async () => {
  var endpoints = []
  for (let i = 152; i <= 251; i++) {
    const response = await axiosApi.get<PokemonData>(`/pokemon/${i}/`);
    var responseData = response.data
    endpoints.push(responseData)
  }
  return endpoints;
}

export const thirdGeneration = async () => {
  var endpoints = []
  for (let i = 252; i <= 386; i++) {
    const response = await axiosApi.get<PokemonData>(`/pokemon/${i}/`);
    var responseData = response.data
    endpoints.push(responseData)
  }
  return endpoints;
}

export const fourthGeneration = async () => {
  var endpoints = []
  for (let i = 387; i <= 493; i++) {
    const response = await axiosApi.get<PokemonData>(`/pokemon/${i}/`);
    var responseData = response.data
    endpoints.push(responseData)
  }
  return endpoints;
}

export const fifthGeneration = async () => {
  var endpoints = []
  for (let i = 494; i <= 649; i++) {
    const response = await axiosApi.get<PokemonData>(`/pokemon/${i}/`);
    var responseData = response.data
    endpoints.push(responseData)
  }
  return endpoints;
}

export const sixthGeneration = async () => {
  var endpoints = []
  for (let i = 650; i <= 721; i++) {
    const response = await axiosApi.get<PokemonData>(`/pokemon/${i}/`);
    var responseData = response.data
    endpoints.push(responseData)
  }
  return endpoints;
}

export const seventhGeneration = async () => {
  var endpoints = []
  for (let i = 722; i <= 809; i++) {
    const response = await axiosApi.get<PokemonData>(`/pokemon/${i}/`);
    var responseData = response.data
    endpoints.push(responseData)
  }
  return endpoints;
}

export const eighthGeneration = async () => {
  var endpoints = []
  for (let i = 810; i <= 920; i++) {
    const response = await axiosApi.get<PokemonData>(`/pokemon/${i}/`);
    var responseData = response.data
    endpoints.push(responseData)
  }
  return endpoints;
}

export const ninhtGeneration = async () => {
  var endpoints = []
  for (let i = 921; i <= 1000; i++) {
    const response = await axiosApi.get<PokemonData>(`/pokemon/${i}/`);
    var responseData = response.data
    endpoints.push(responseData)
  }
  return endpoints;
}