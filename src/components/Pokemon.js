import axios from "axios";
import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const [height, setHeight] = useState(0);
  const [isDecimeter, setIsDecimeter] = useState(true);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/15/").then((res) => {
      setPokemon(res.data);
      setHeight(res.data.height);
    });
  }, []);

  console.log(pokemon);

  const changeUnit = () => {
    if (isDecimeter) {
      // Convertir a metros
      setHeight(height / 10);
      setIsDecimeter(false);
    } else {
      // Convertir a decimetros
      setHeight(height * 10);
      setIsDecimeter(true);
    }
  };

  // Opcion 2:
  // const changeUnit = () => setIsDecimeter(!isDecimeter);

  return (
    <div className="card-pikachu">
      <h1>{capitalize(pokemon.name)}</h1>
      <img
        src={pokemon.sprites?.other["official-artwork"].front_default}
        alt=""
      />
      <p>
        <b>Weight: </b> {pokemon.weight} hectograms
      </p>
      <p>
        <b>Height: </b> {pokemon.height} {isDecimeter ? "decimeters" : "meters"}
      </p>

      {/* Opcion 2: */}
      {/* {isDecimeter ? `${pokemon.height} decimeters` : `${pokemon.height / 10} meters`} */}

      <p>
        <b>Type: </b> {pokemon.types?.[0].type.name}
      </p>
      <button onClick={changeUnit}>Change height units</button>
    </div>
  );
};

const capitalize = (str) => str?.charAt(0).toUpperCase() + str?.slice(1);

export default Pokemon;
