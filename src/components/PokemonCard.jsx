import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

function PokemonCard({ pokemon }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios.get(pokemon.url)
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Pokemon data:', error);
      });
  }, [pokemon.url]);

  return (
    <Card style={{ margin: '16px', minWidth: '200px' }}>
      {pokemonData && (
        <>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
            style={{ width: '100px', height: '100px', margin: 'auto' }}
          />
          <CardContent>
            <Typography variant="h6">{pokemonData.name}</Typography>
            <Typography variant="body2">Height: {pokemonData.height}</Typography>
            <Typography variant="body2">Weight: {pokemonData.weight}</Typography>
          </CardContent>
        </>
      )}
    </Card>
  );
}

export default PokemonCard;
