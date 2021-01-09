import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    height: calc(100vh - 254px);
  `}
`;

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;

  display: flex;
  align-items: center;

  svg {
    width: 100%;
    min-width: 360px;
  }
`;

export const Actions = styled.aside`
  max-width: 52rem;
`;

export const Title = styled.h1`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.secondary};
    line-height: 55px;
    margin-bottom: 4.2rem;
  `}
`;

export const Description = styled.div`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray};
    margin-bottom: 4.2rem;
  `}
`;

export const OrderButton = styled.a`
  ${({theme}) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-weight: ${theme.font.semiBold};
    text-transform: uppercase;
    padding: 1.6rem 4rem;
    border-radius: ${theme.border.radius};
    text-decoration: none;
  `}
`;
