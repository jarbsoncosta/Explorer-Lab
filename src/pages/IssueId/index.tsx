import { Container } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useParams } from 'react-router-dom'
import { HeaderIssue } from './components/HeaderIssue'

interface PropsIssueGitHub {
  id: number
  title: string
  body: string
  comments: number
  created_at: Date
  user: {
    login: string
  }
}
export function IssueId() {
  const [data, setData] = useState<PropsIssueGitHub>({} as PropsIssueGitHub)

  const { issueId } = useParams()

  useEffect(() => {
    api
      .get(
        `https://api.github.com/repos/diego3g/responsive-native/issues/${issueId}`,
      )
      .then((response) => {
        setData(response.data)
      })
  }, [issueId])
  return (
    <Container>
      <HeaderIssue data={data} />
    </Container>
  )
}
