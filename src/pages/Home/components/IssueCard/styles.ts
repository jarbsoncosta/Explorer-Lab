import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.main`
  margin: 0 auto;
  max-width: 54rem;
  padding: 2rem 1rem;
  gap: 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 894px) {
    display: flex;
    flex-wrap: wrap;
  }
`

export const Card = styled.div`
  display: flex;
  width: 100%;
  height: 13rem;
  flex-direction: column;
  gap: 1.25rem;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;

  .title-date {
    display: flex;
    justify-content: space-between;
    line-height: 160%;
    .title {
      display: flex;
      width: 100%;

      a {
        color: ${(props) => props.theme['base-title']};
        text-decoration: none;
        font-weight: 700;
        font-size: 1.25rem;
        transition: 0.1s;
        &:hover {
          color: ${(props) => props.theme.blue};
        }
      }
    }
    .date {
      display: flex;
      width: 50%;
      justify-content: end;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    line-height: 1.6rem;
  }
`
