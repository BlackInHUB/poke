import { PokemonDetailsType } from '../../lib/types';
import {
  DetailsContainer,
  DetailsDataList,
  DetailsDataListItem,
  DetailsImage,
  DetailsImagesWrapper,
  DetailsLabel,
  DetailsText,
} from './PokemonDetails.styled';

type Props = {
  pokemon: PokemonDetailsType;
};

export const PokemonDetails = ({ pokemon }: Props) => {
  const { name, height, weight, abilities, sprites } = pokemon;

  return (
    <DetailsContainer>
      <DetailsImagesWrapper>
        <DetailsImage src={sprites.front_default} />
        <DetailsImage src={sprites.back_default} />
      </DetailsImagesWrapper>
      <DetailsDataList>
        <DetailsDataListItem>
          <DetailsLabel>
            Name: <DetailsText>{name}</DetailsText>
          </DetailsLabel>
        </DetailsDataListItem>
        <DetailsDataListItem>
          <DetailsLabel>
            Height: <DetailsText>{height} inch</DetailsText>
          </DetailsLabel>
        </DetailsDataListItem>
        <DetailsDataListItem>
          <DetailsLabel>
            Weight: <DetailsText>{weight} gram</DetailsText>
          </DetailsLabel>
        </DetailsDataListItem>
        <DetailsDataListItem>
          <DetailsLabel>
            Abilities:{' '}
            {abilities.map((item, i) => (
              <DetailsText key={i}>{item.ability.name}</DetailsText>
            ))}
          </DetailsLabel>
        </DetailsDataListItem>
      </DetailsDataList>
    </DetailsContainer>
  );
};
