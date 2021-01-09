import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components'

export const Container = styled.nav`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;

  height: 100%;
  display: flex;
  align-items: center;  
`;

export const LogoTitle = styled(Link)`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.white};
    margin-left: ${theme.spacings.xxsmall};
    text-decoration: none;
  `}
`;


