import styled from 'styled-components'
import logoImg from '../../assets/backrond-header.svg'

export const HeaderContainer = styled.header`
  padding-top: 4rem;
  height: 18.5rem;
  background: url(${logoImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  img {
    width: 9.25rem;
    height: 6.12rem;
  }
`
