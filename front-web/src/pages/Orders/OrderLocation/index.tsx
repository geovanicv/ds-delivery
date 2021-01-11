import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AsyncSelect from 'react-select/async'
import { fetchLocalMapBox } from '../../../api';
import { OrderLocationData } from '../types';

import * as S from './styles'

const initialPosition = {
  lat: 51.505,
  lng: -0.09
}

type Place = {
  label?: string
  value?: string
  position: {
    lat: number
    lng: number
  }
}

type Props = {
  onChangeLocation: (location: OrderLocationData) => void
}

const OrderLocation = ({onChangeLocation}: Props) => {

const [address, setAddress] = useState<Place>({
  position: initialPosition
})

const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
  const response = await fetchLocalMapBox(inputValue);

  const places = response.data.features.map((item: any) => {
    return ({
      label: item.place_name,
      value: item.place_name,
      position: {
        lat: item.center[1],
        lng: item.center[0]
      }
    });
  });

  callback(places);
};

const handleChangeSelect = (place: Place) => {
  setAddress(place);
  onChangeLocation({
    latitude: place.position.lat,
    longitude: place.position.lng,
    address: place.label!
  });
};

  return (
   <S.Container>
     <S.Wrapper>
        <S.Title>
          Selecione onde o pedido deve ser entregue
        </S.Title> 
        <S.FilterContainer>
          <AsyncSelect 
            placeholder="Digite um endereço para entregar o pedido"
            className="filter"
            loadOptions={loadOptions}
            onChange={value => handleChangeSelect(value as Place)} 
          />
        </S.FilterContainer>            
     </S.Wrapper>

     <S.Map>
          <MapContainer 
            style={{ width: '100%', height: '100%' }} 
            center={[address.position.lat, address.position.lng]} 
            zoom={15} 
            key={address.position.lat}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[address.position.lat, address.position.lng]}>
              <Popup>
                {address.label}
              </Popup>
            </Marker>
          </MapContainer>
        </S.Map> 

    </S.Container>
  ) 
}

export default OrderLocation