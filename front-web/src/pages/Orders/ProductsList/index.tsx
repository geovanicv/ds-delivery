import { checkIsSelected } from '../helpers'
import ProductCard from '../ProductCard'
import { Product } from '../types'
import * as S from './styles'

type Props = {
  products: Product[]
  selectedProducts: Product[]
  onSelectProduct: (product: Product) => void

}

const ProductsList = ({products, onSelectProduct, selectedProducts}: Props) => {
  return (
      <S.Container>
        <S.Wrapper>
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              onSelectProduct={onSelectProduct}
              isSelected={checkIsSelected(selectedProducts, product)}
            />
          ))}
        </S.Wrapper>
      </S.Container>
  ) 
}

export default ProductsList