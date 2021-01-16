import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({theme}) => css`
    background-color: ${theme.colors.lightGray};
  `}
`;

export const Wrapper = styled.div`
 > h1 {
    text-align: center;
    margin: 2rem;
    ${({theme}) => css`
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.xlarge};
    `}
  }
`;