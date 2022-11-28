import { Container, Content } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useParams } from 'react-router-dom'
import { HeaderIssue } from './components/HeaderIssue'
import Loading from '../../components/isLoading/isLoading'

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

  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    async function handleIssueIdResponse() {
      const response = await api.get(
        `https://api.github.com/repos/diego3g/responsive-native/issues/${issueId}`,
      )

      setData(response.data)
      setLoading(true)
      console.log(response.data)
    }
    handleIssueIdResponse()
  }, [issueId])
  return (
    <Container>
      {!isLoading ? (
        <Loading />
      ) : (
        <>
          <HeaderIssue data={data} />
          <Content>
            <p>{data.body} </p>
          </Content>
        </>
      )}
    </Container>
  )
}
