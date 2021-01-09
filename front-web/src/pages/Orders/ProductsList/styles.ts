import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({theme}) => css`
    background-color: ${theme.colors.lightGray};
  `}
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;

  display: grid;
  grid-template-columns: repeat(auto-fill, 24rem);
  gap: 2rem;

  /* display: flex;
  justify-content: center;

  gap: 1rem;
  flex-wrap: wrap; */
`;