import * as S from './style'

const StepsHeader = () => {
  return (
      <S.Container>
        <S.Wrapper>
          <S.Title>
            Siga as <br /> etapas
          </S.Title>
          <S.StepsContainer>
            <S.Step>
              <h1>1</h1>
              <span>Selecione os produtos e localização</span>
            </S.Step>
            <S.Step>
              <h1>2</h1>
              <span>Depois clique em <strong>"Enviar pedido"</strong></span>
            </S.Step>
          </S.StepsContainer>
        </S.Wrapper>
      </S.Container>
  ) 
}

export default StepsHeader