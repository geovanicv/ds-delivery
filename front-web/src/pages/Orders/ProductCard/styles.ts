import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    max-height: 46rem;
    min-height: 46rem;
    width: 24rem;
    padding: 1rem;
    border-radius: ${theme.border.radius};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

    &:hover {
      border: 2px solid ${theme.colors.primary};
    }
  `}
`;

export const Title = styled.h3`
  ${({theme}) => css`
    color: ${theme.colors.primary};
    text-align: center;
  `}
`;

export const CardImage = styled.img`
  ${({theme}) => css`
    border-radius: ${theme.border.radius};
    margin: 1rem 0;
    width: 100%;
  `}
`;


export const Price = styled.h1`
  ${({theme}) => css`
    color: ${theme.colors.primary};
  `}
`;

export const Separator = styled.div`
  width: 95%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.lightGray};
  margin: 1rem 0;
`;

export const DescriptionContainer = styled.div`
  ${({theme}) => css`
    color: ${theme.colors.gray};
  `}
`;

export const DescriptionTitle = styled.strong`
   ${({theme}) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const Info = styled.p`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.small};
    margin-top: 2rem;
  `}
`;
