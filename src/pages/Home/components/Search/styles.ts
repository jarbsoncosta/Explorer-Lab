import styled from 'styled-components'

export const Container = styled.main`
  margin: 0 auto;
  max-width: 54rem;
  padding-top: 2rem;
`

export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 2rem;

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
  strong {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const InputSearch = styled.input`
  width: 100%;
  margin-top: 0.75rem;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme['base-input']};
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']}; ;
`
