import styled from 'styled-components'

export const Container = styled.div`
  max-width: 54rem;
  margin: -5rem auto 0;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

export const Content = styled.div`
  background: ${(props) => props.theme['base-profile']};

  padding: 2rem;
  align-items: center;
  border-radius: 10px;
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
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }
  span {
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`

export const DetailsIssue = styled.div`
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
export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 1rem;
  a {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 0.75rem;

    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }
`
