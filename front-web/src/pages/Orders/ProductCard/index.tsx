import { formatPrice } from '../helpers'
import { Product } from '../types'
import * as S from './styles'

type Props = {
  product: Product
  onSelectProduct: (product: Product) => void
  isSelected: boolean
}



const ProductCard = ({product, onSelectProduct, isSelected}: Props) => {
  return (
      <S.Container isSelected={isSelected} onClick={() => onSelectProduct(product)}>
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