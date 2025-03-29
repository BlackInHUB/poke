export type PokemonType = {
  name: string;
  url: string;
};

export type PokemonDetailsType = {
  name: string;
  height: number;
  weight: number;
  sprites: {
    back_default: string;
    front_default: string;
  };
  abilities: { ability: { name: string } }[];
};
