import { Container, InputSearch, Title } from './styles'

export function Search() {
  return (
    <Container>
      <Title>
        <strong>Publicações</strong>
        <span>6 puplicações</span>
      </Title>

      <InputSearch placeholder="Buscar conteúdo" />
    </Container>
  )
}
