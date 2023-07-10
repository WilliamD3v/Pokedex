export default interface PokemonData {
  id: number;

  forms: {
    [0]: {
      name: string;
    };
  };

  sprites: {
    other: {
      home:{
        front_default: string
      }
    }
  };
}
