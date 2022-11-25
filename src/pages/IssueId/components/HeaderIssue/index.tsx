import { Container, Content, DataProfile } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { MdDateRange } from 'react-icons/md'
import { TbMessageCircle2 } from 'react-icons/tb'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

interface PropsIssueGitHub {
  data: {
    id: number
    title: string
    body: string
    comments: number
    created_at: Date
    user: {
      login: string
    }
  }
}

export function HeaderIssue({ data }: PropsIssueGitHub) {
  return (
    <Container>
      <Content>
        <div></div>
        <div>
          <h3>{data.title} </h3>
          <span>{}</span>
          <DataProfile>
            <p>
              <AiFillGithub size={25} /> {data.user?.login}
            </p>

            <p>
              <MdDateRange size={25} />
              {data.created_at}
            </p>

            <p>
              <TbMessageCircle2 size={25} />
              {data.comments} comentários
            </p>
          </DataProfile>
        </div>
      </Content>
    </Container>
  )
}
