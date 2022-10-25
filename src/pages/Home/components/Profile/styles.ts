import styled from 'styled-components'

export const Container = styled.div`
  max-width: 54rem;
  height: 13.25rem;
  margin: -5rem auto 0;
  border-radius: 10px;
  padding: 2rem;

  background: ${(props) => props.theme['base-profile']};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`
