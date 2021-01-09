import {ReactComponent as ImageHero} from '../../assets/hero.svg'
import * as S from './styles'

const Home = () => {
  return (
      <S.Container>
        <S.Wrapper>
          <S.Actions>
            <S.Title>Faça seu pedido que entregamos para voce!</S.Title>
            <S.Description>
              Escolha o seu pedido  e em poucos minutos levaremoss na sua porta
            </S.Description>
            <S.OrderButton href="home">Fazer pedido</S.OrderButton>
          </S.Actions>
          <ImageHero />
        </S.Wrapper>
      </S.Container>
  ) 
}

export default Home