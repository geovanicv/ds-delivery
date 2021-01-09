import { useEffect, useState } from 'react'
import ProductsList from './ProductsList'
import StepsHeader from './StepsHeader'
import {Product} from './types'
import * as S from './styles'
import api from '../../api'

const Orders = () => {

  const [products, setProducts] = useState<Product[]>([]);
  console.log(products)

  useEffect(() => {
    api.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, [])

  return (
      <S.Container>
        <S.Wrapper>
          <StepsHeader />
          <ProductsList products={products}/>
        </S.Wrapper>
      </S.Container>
  ) 
}

export default Orders