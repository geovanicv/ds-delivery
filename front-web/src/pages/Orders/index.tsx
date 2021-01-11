import { useEffect, useState } from 'react'
import ProductsList from './ProductsList'
import StepsHeader from './StepsHeader'
import {OrderLocationData, Product} from './types'
import * as S from './styles'
import api from '../../api'
import OrderLocation from './OrderLocation'

const Orders = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>()

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
          <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </S.Wrapper>
      </S.Container>
  ) 
}

export default Orders