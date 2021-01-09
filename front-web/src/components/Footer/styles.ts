import styled, { css } from 'styled-components'

export const Container = styled.footer`
  ${({theme}) => css`
    height: 8.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
  `}

  @media (max-width: 420px) {
    padding: 1rem;
  }

`;

export const FooterTitle = styled.p`
  margin-bottom: 1rem;
  text-align: center;
  
  @media (max-width: 420px) {
     font-size: ${({theme}) => theme.font.sizes.small};
  }

`;

export const FooterIcons = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center; 
    justify-content: center; 
  `}
`;

export const LinkIcon = styled.a`
  ${({theme}) => css`
    
  & + a {
    margin-left: 1rem;
  }

  `}
`;