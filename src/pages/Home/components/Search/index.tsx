import { Container, InputSearch, Title } from './styles'

interface PropsSearch {
  setrQ: (data: string) => void
}

export function Search({ setrQ }: PropsSearch) {
  return (
    <Container>
      <Title>
        <strong>Publicações</strong>
        <span>6 puplicações</span>
      </Title>

      <InputSearch
        onChange={(e) => setrQ(e.target.value)}
        placeholder="Buscar conteúdo"
      />
    </Container>
  )
}
