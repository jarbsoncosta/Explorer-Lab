import { Container, Card } from './styles'
import { Link, useParams } from 'react-router-dom'

interface Props {
  id: number
  title: string
  body: string
  number: number
}

interface PropsIssueGitHub {
  issues: Props[]
}

export function IssueCard({ issues }: PropsIssueGitHub) {
  const limit = 145

  const { issueId } = useParams()

  return (
    <Container>
      {issues.map((i) => {
        return (
          <Card key={i.id}>
            <div className="title-date">
              <div className="title">
                <Link to={`/blog/${i.number}`}>{i.title} </Link>
              </div>
              <div className="date">
                <span>Há 1 dia</span>
              </div>
            </div>
            <div className="subject">
              {i.body.length > limit ? (
                <p>
                  {i.body.substring(0, limit)} {' ...'}
                </p>
              ) : (
                <p>{i.body} </p>
              )}
            </div>
          </Card>
        )
      })}
    </Container>
  )
}
