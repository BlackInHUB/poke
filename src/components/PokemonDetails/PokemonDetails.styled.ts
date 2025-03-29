import styled from 'styled-components';

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.h6};
  margin-bottom: 40px;
`;

export const DetailsImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const DetailsImage = styled.img`
  width: 300px;
  height: auto;
`;

export const DetailsDataList = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DetailsDataListItem = styled.li``;

export const DetailsLabel = styled.p`
  display: flex;
  gap: 8px;
  font-weight: ${({ theme }) => theme.fontWeights.m};
`;

export const DetailsText = styled.span`
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeights.s};

  &::first-letter {
    text-transform: uppercase;
  }
`;
