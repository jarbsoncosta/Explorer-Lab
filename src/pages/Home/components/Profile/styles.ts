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
  h3 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 24px;
    color: ${(props) => props.theme['base-title']};
  }
  span {
    line-height: 1.7;
  }
`

export const DataProfile = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;

  p {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
