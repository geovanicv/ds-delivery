import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    height: 100%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  `}
`;

export const Wrapper = styled.div`
  ${({theme}) => css`
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px;
  `}
`;

export const Title = styled.h3`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
    text-align: center;
    padding-bottom: 1rem; 
  `}
`;

export const FilterContainer = styled.div`
`;

export const Map = styled.div`
  height: 500px;
`;

