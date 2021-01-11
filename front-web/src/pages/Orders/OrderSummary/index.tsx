import { formatPrice } from '../helpers'
import * as S from './styles'

type Props = {
  amount: number
  totalPrice: number
  onSubmit: () => void
}

const OrderSummary = ({amount, totalPrice, onSubmit}: Props) => {
  return (
      <S.Container>
        <S.Wrapper>
          <S.Total>
            <S.AmountSelectedContainer>
              <strong>{amount}</strong>
              Pedidos selecionados
            </S.AmountSelectedContainer>
            <S.OrderSummaryTotal>
              <strong>{formatPrice(totalPrice)}</strong>
              Valor total
            </S.OrderSummaryTotal>
          </S.Total>

          <S.MakeOrderButton onClick={onSubmit}>Fazer Pedido</S.MakeOrderButton>
          
        </S.Wrapper>
      </S.Container>
  ) 
}

export default OrderSummary