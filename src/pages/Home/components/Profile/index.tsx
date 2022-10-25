import { Container, Content } from './styles'

export function Profile() {
  return (
    <Container>
      <Content>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/80639874?v=4"
            alt="avatar"
          />
        </div>
        <div>
          <h3>Cameron Williamson</h3>
          <span>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </span>
          <div></div>
        </div>
      </Content>
    </Container>
  )
}
