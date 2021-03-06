import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  max-width: 1400px;
  margin: 0 auto;
  height: 133px;
  padding: 0 20px;

  @media (max-width: 650px) {
  }

`;

export const Title = styled.h1`
  ${({theme}) => css`
    color: ${theme.colors.primary};
    margin-right: 10rem;
    text-transform: uppercase;
  `}

  @media (max-width: 650px) {
    ${({theme}) => css`
      font-size: ${theme.font.sizes.xlarge};
  `}
  }

  @media (max-width: 550px) {
    ${({theme}) => css`
      font-size: ${theme.font.sizes.medium};
  `}
  }

  @media (max-width: 450px) {
    ${({theme}) => css`
      font-size: ${theme.font.sizes.small};
  `}
  }
`;

export const StepsContainer = styled.ul`
  list-style: none;
`;

export const Step = styled.li`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.gray};

    h1 {
      display: inline-block;
      margin-right: 1.4rem;
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.xlarge};
    }

    strong {
      text-transform: uppercase;
    }
  `}

  @media (max-width: 650px) {
    ${({theme}) => css`
      font-size: ${theme.font.sizes.medium};

      h1 {
        font-size: ${theme.font.sizes.medium};
      }
    `}
  }

  @media (max-width: 550px) {
    ${({theme}) => css`
      font-size: ${theme.font.sizes.small};

      h1 {
        font-size: ${theme.font.sizes.small};
      }
    `}
  }

  @media (max-width: 450px) {
    ${({theme}) => css`
      font-size: ${theme.font.sizes.xsmall};

      h1 {
        font-size: ${theme.font.sizes.xsmall};
      }
    `}
  }
`;