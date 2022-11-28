import { Container, Content, DetailsIssue, Navigation } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { MdDateRange, MdKeyboardArrowLeft, MdLaunch } from 'react-icons/md'
import { TbMessageCircle2 } from 'react-icons/tb'
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'

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
  const { issueId } = useParams()
  return (
    <Container>
      <Content>
        <Navigation>
          <Link to="/">
            <MdKeyboardArrowLeft size={25} />
            VOLTAR
          </Link>
          <a
            href={`https://github.com/diego3g/responsive-native/issues/${issueId}`}
            target="_blank"
            rel="noreferrer"
          >
            VER NO GITHUB <MdLaunch size={18} />
          </a>
        </Navigation>
        <div>
          <h3>{data.title} </h3>

          <DetailsIssue>
            <p>
              <AiFillGithub size={25} /> {data.user?.login}
            </p>
            <p>
              <MdDateRange size={25} />
              {moment(data.created_at).format('DD/MM/YYYY')}
            </p>
            <p>
              <TbMessageCircle2 size={25} />
              {data.comments} comentários
            </p>
          </DetailsIssue>
        </div>
      </Content>
    </Container>
  )
}
