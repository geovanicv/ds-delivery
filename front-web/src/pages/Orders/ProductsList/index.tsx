import ProductCard from '../ProductCard'
import { Product } from '../types'
import * as S from './styles'

type Props = {
  products: Product[];
}

const ProductsList = ({products}: Props) => {
  return (
      <S.Container>
        <S.Wrapper>
          {products.map(product => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </S.Wrapper>
      </S.Container>
  ) 
}

export default ProductsList