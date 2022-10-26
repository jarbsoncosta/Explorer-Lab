import { Container, Content, DataProfile } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { MdDomain } from 'react-icons/md'
import { ImUsers } from 'react-icons/im'
import { useEffect, useState } from 'react'
import { api } from '../../../../services/api'

interface ProfileUser {
  name: string
  avatar_url: string
  bio: string
  login: string
  followers: number
}

export function Profile() {
  const [user, setUser] = useState<ProfileUser>({} as ProfileUser)
  console.log(user)
  useEffect(() => {
    api
      .get('users/jarbsoncosta')
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <Container>
      <Content>
        <div>
          <img src={user.avatar_url} alt="avatar" />
        </div>
        <div>
          <h3>{user.name} </h3>
          <span>{user.bio}</span>
          <DataProfile>
            <p>
              <AiFillGithub size={25} /> {user.login}
            </p>
            <p>
              <MdDomain size={25} />
              FreeLancer
            </p>
            {user.followers > 1 ? (
              <p>
                <ImUsers size={25} />
                {user.followers} seguidores
              </p>
            ) : (
              <p>
                <ImUsers size={25} />
                {user.followers} seguidor
              </p>
            )}
          </DataProfile>
        </div>
      </Content>
    </Container>
  )
}
