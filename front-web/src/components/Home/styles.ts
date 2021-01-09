import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    height: calc(100vh - 7.3rem - 8.5rem);
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

  @media (max-width: 870px) {
    flex-direction: column;
    justify-content: space-evenly;

    svg {
      max-height: 360px;
    }
  }

  @media (max-width: 420px) {
    svg {
      margin-bottom: 2rem;
    }
  }

`;

export const Actions = styled.aside`
  max-width: 52rem;

  @media (max-width: 870px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  ${({theme}) => css`
    font-size:  min(${theme.font.sizes.xxlarge}, 10vw);
    color: ${theme.colors.secondary};
    line-height: 5.5rem;
    margin-bottom: 4.2rem;
  `}

  @media (max-width: 870px) {
    line-height: 4.5rem;
    margin-top: 2rem;
    margin-bottom: 2.4rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  ${({theme}) => css`
    font-size: min(${theme.font.sizes.xlarge}, 5vw);
    color: ${theme.colors.gray};
    margin-bottom: 4.2rem;
  `}

  @media (max-width: 870px) {
    line-height: 2.4rem;
    margin-bottom: 3.6rem;
    text-align: center;
  }
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

  @media (max-width: 870px) {
    align-self: center;
    padding: 1rem 2rem;
  }

  @media (max-width: 420px) {
    margin-top: -2rem;
    margin-bottom: 2rem;
  }
`;
