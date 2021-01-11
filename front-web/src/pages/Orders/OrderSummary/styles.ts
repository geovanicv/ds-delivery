import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({theme}) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const Wrapper = styled.div`
   max-width: 1300px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;

`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AmountSelectedContainer = styled.span`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    text-transform: uppercase;

    strong {

      margin-right: 1rem;

    }
  `}
`;

export const OrderSummaryTotal = styled.span`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    text-transform: uppercase;

    strong {
      margin-right: 1rem;
    }
  `}
`;

export const MakeOrderButton = styled.button`
  ${({theme}) => css`
    border: 0;
    color: ${theme.colors.primary};
    background: ${theme.colors.white};
    padding: 1rem 2rem;
    font-weight: ${theme.font.bold};
    border-radius: ${theme.border.radius};
    text-transform: uppercase;
  `} 
`;