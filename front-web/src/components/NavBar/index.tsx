import { ReactComponent as Logo } from '../../assets/logo.svg';

import * as S from './styles';

function NavBar() {
  return (
   <S.Container>
     <S.Wrapper>
        <Logo />
        <S.LogoTitle href="home">DS delivery</S.LogoTitle>
     </S.Wrapper>
   </S.Container>
  );
} 

export default NavBar;
 