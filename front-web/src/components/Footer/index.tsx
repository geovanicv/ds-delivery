import {ReactComponent as Instagram} from '../../assets/instagram.svg'
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg'
import {ReactComponent as Youtube} from '../../assets/youtube.svg'

import * as S from './styles'

const Footer = () => {
  return (
      <S.Container>
        <S.FooterTitle>
          App desenvolvido durante a 2ª ed. do evento 
          <strong> Semana DevSuperior</strong>
        </S.FooterTitle>
        <S.FooterIcons>
          <S.LinkIcon href="#">
            <Youtube />
          </S.LinkIcon>
          <S.LinkIcon href="#">
            <Linkedin />
          </S.LinkIcon>
          <S.LinkIcon href="#">
            <Instagram />
          </S.LinkIcon>
        </S.FooterIcons>
      </S.Container>
  ) 
}

export default Footer