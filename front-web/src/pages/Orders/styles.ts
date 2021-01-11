import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({theme}) => css`
    background-color: ${theme.colors.lightGray};
  `}
`;

export const Wrapper = styled.div``;