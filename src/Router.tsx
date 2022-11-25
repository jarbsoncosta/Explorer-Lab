import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './components/Layout/DefaultLayout'
import { Home } from './pages/Home'
import { IssueId } from './pages/IssueId'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="" element={<Home />} />
        <Route path="blog/:issueId" element={<IssueId />} />
      </Route>
    </Routes>
  )
}
