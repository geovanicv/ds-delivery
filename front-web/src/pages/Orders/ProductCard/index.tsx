import { Product } from '../types'
import * as S from './styles'

type Props = {
  product: Product
}

function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return formatter.format(price)
}

const ProductCard = ({product}: Props) => {
  return (
      <S.Container>
        <S.Title>{product.name}</S.Title>
        <S.CardImage src={product.imageUrl} alt={product.name} />
        <S.Price>{formatPrice(product.price)}</S.Price>
        
        <S.Separator/>

        <S.DescriptionContainer>
          <S.DescriptionTitle>Description</S.DescriptionTitle>
          <S.Info>
            {product.description}
          </S.Info>
        </S.DescriptionContainer>
      </S.Container>
  ) 
}

export default ProductCard